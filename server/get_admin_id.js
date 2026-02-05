
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findFirst({
        where: { email: 'sustainabilityhighway@gmail.com' }
    });
    console.log(user ? user.id : 'User not found');
}

main().catch(console.error).finally(() => prisma.$disconnect());
