import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    const email = 'sustainabilityhighway@gmail.com';
    console.log(`Checking for user: ${email}`);

    const user = await prisma.user.findUnique({ where: { email } });

    // Decided on 'Zooni@2024' based on "Z bada hai" (Z is capital) interpretation.
    const password = 'Zooni@2024';
    const hashedPassword = await bcrypt.hash(password, 10);

    if (user) {
        console.log('User exists. Updating password...');
        await prisma.user.update({
            where: { email },
            data: { password: hashedPassword }
        });
        console.log(`Success! Password for ${email} updated to: ${password}`);
    } else {
        console.log('User does not exist. Creating user...');
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name: 'Admin',
                role: 'ADMIN'
            }
        });
        console.log(`Success! Created user ${email} with password: ${password}`);
    }
}

main()
    .catch(e => {
        console.error('Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
