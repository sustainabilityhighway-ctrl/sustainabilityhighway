import { IsString, IsOptional, IsBoolean, IsArray, IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum BlogStatus {
    DRAFT = 'DRAFT',
    PUBLISHED = 'PUBLISHED',
}

export class CreateBlogDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    slug: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    content: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    excerpt?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    image_url?: string;

    @ApiProperty({ enum: BlogStatus, default: BlogStatus.DRAFT })
    @IsEnum(BlogStatus)
    @IsOptional()
    status?: BlogStatus;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    meta_title?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    meta_description?: string;

    @ApiProperty({ required: false })
    @IsArray()
    @IsString({ each: true })
    @IsOptional()
    topic_tags?: string[];

    @ApiProperty({ required: false })
    @IsOptional()
    categoryId?: number;
}

export class UpdateBlogDto extends CreateBlogDto { }
