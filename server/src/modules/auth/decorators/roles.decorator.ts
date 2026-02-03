import { SetMetadata } from '@nestjs/common';

export type Role = 'ADMIN' | 'EDITOR';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
