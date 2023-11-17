-- DropForeignKey
ALTER TABLE "Branch" DROP CONSTRAINT "Branch_manager_id_fkey";

-- AlterTable
ALTER TABLE "Branch" ALTER COLUMN "manager_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "Employee"("emp_id") ON DELETE SET NULL ON UPDATE CASCADE;
