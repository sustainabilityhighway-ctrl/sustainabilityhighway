import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateBlogDto, UpdateBlogDto } from './dto/blog.dto';

@Injectable()
export class BlogsService {
    constructor(private prisma: PrismaService) { }

    async create(createBlogDto: CreateBlogDto, authorId: string) {
        const existing = await this.prisma.blog.findFirst({
            where: {
                OR: [
                    { slug: createBlogDto.slug },
                    { title: createBlogDto.title }
                ]
            }
        });

        if (existing) {
            throw new Error('A blog with this title or slug already exists.');
        }

        return this.prisma.blog.create({
            data: {
                ...createBlogDto,
                authorId,
            },
        });
    }

    async findAll(query: {
        page?: number;
        limit?: number;
        search?: string;
        status?: any;
        categoryId?: number;
    }) {
        const { page = 1, limit = 10, search, status, categoryId } = query;
        const skip = (page - 1) * limit;

        const where: any = {};
        if (search) {
            where.OR = [
                { title: { contains: search, mode: 'insensitive' } },
                { content: { contains: search, mode: 'insensitive' } },
            ];
        }
        if (status) where.status = status;
        if (categoryId) where.categoryId = Number(categoryId);

        const [items, total] = await Promise.all([
            this.prisma.blog.findMany({
                where,
                skip,
                take: Number(limit),
                orderBy: { created_at: 'desc' },
                include: {
                    category: true,
                    author: { select: { name: true, email: true } },
                    tags: true,
                },
            }),
            this.prisma.blog.count({ where }),
        ]);

        return {
            items,
            meta: {
                total,
                page,
                lastPage: Math.ceil(total / limit),
            },
        };
    }

    async findOne(id: number) {
        const blog = await this.prisma.blog.findUnique({
            where: { id },
            include: { category: true, tags: true, author: true },
        });
        if (!blog) throw new NotFoundException('Blog not found');
        return blog;
    }

    async update(id: number, updateBlogDto: UpdateBlogDto) {
        return this.prisma.blog.update({
            where: { id },
            data: updateBlogDto,
        });
    }

    async remove(id: number) {
        return this.prisma.blog.delete({ where: { id } });
    }
}
