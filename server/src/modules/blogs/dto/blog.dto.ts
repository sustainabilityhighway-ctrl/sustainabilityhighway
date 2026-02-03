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

    @ApiProperty({ enum: ['DRAFT', 'PUBLISHED'], default: 'DRAFT' })
    @IsString()
    @IsOptional()
    status?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    meta_title?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    meta_description?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    topic_tags?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    canonical_url?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    faq_data?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    schema_data?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    categoryId?: number;
}

export class UpdateBlogDto {
    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    title?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    slug?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    content?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    excerpt?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    image_url?: string;

    @ApiProperty({ enum: ['DRAFT', 'PUBLISHED'], required: false })
    @IsString()
    @IsOptional()
    status?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    meta_title?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    meta_description?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    topic_tags?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    canonical_url?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    faq_data?: string;

    @ApiProperty({ required: false })
    @IsString()
    @IsOptional()
    schema_data?: string;

    @ApiProperty({ required: false })
    @IsOptional()
    categoryId?: number;
}
