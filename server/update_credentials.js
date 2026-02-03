
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const prisma = new PrismaClient();

async function main() {
    const email = 'sustainabilityhighway@gmail.com';
    const password = 'Zooni@2024';
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.upsert({
        where: { email },
        update: {
            password: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN'
        },
        create: {
            email,
            password: hashedPassword,
            name: 'Admin User',
            role: 'ADMIN'
        }
    });

    console.log('User created/updated:', user.email);
}

main().catch(console.error).finally(() => prisma.$disconnect());
