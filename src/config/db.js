const connectionString = `${process.env.DATABASE_URL}`;
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development" 
    ? ["query", "error", "warn"]
    : ["error"]
});

const connectDB = async () => {
    try {
        await prisma.$connect();
        console.log("DB connected via Prisma");
    } catch (error){
        console.error(`DB Connection error ${error}`);
        process.exit(1);
    }
};

const disconnectDB = async () => {
    await prisma.$disconnect();
}

export  {connectDB, disconnectDB};
export default prisma;