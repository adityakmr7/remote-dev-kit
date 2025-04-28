/*
  Warnings:

  - You are about to drop the `StandupTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `teamId` to the `Standup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "StandupTag" DROP CONSTRAINT "StandupTag_standupId_fkey";

-- AlterTable
ALTER TABLE "Standup" ADD COLUMN     "teamId" TEXT NOT NULL;

-- DropTable
DROP TABLE "StandupTag";

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_StandupToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_StandupToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tag_name_key" ON "Tag"("name");

-- CreateIndex
CREATE INDEX "_StandupToTag_B_index" ON "_StandupToTag"("B");

-- AddForeignKey
ALTER TABLE "Standup" ADD CONSTRAINT "Standup_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StandupToTag" ADD CONSTRAINT "_StandupToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Standup"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StandupToTag" ADD CONSTRAINT "_StandupToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
