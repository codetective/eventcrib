-- CreateTable
CREATE TABLE "Todo" (
    "id" TEXT NOT NULL,
    "user_address" TEXT NOT NULL,
    "task" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
