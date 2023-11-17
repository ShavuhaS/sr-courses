-- CreateEnum
CREATE TYPE "Sex" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "PackageStatus" AS ENUM ('PROCESSED', 'DELIVERING', 'DELIVERED', 'RECEIVED');

-- CreateEnum
CREATE TYPE "VehicleStatus" AS ENUM ('IDLE', 'DELIVERING', 'OUT_OF_ORDER');

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "phone_number" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "sex" "Sex" NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "join_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Package" (
    "package_id" SERIAL NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "type" TEXT NOT NULL,
    "dimensions" TEXT NOT NULL,
    "status" "PackageStatus" NOT NULL DEFAULT 'PROCESSED',
    "departure_date" TIMESTAMP(3),
    "sender_id" INTEGER NOT NULL,
    "recipient_id" INTEGER NOT NULL,
    "branch_sender_id" INTEGER NOT NULL,
    "branch_recipient_id" INTEGER NOT NULL,
    "carrier_id" INTEGER NOT NULL,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("package_id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "emp_id" SERIAL NOT NULL,
    "sex" "Sex" NOT NULL,
    "first_name" TEXT NOT NULL,
    "middle_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "super_id" INTEGER,
    "branch_id" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("emp_id")
);

-- CreateTable
CREATE TABLE "Branch" (
    "branch_id" SERIAL NOT NULL,
    "branch_name" TEXT NOT NULL,
    "manager_id" INTEGER NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("branch_id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "vehicle_id" SERIAL NOT NULL,
    "status" "VehicleStatus" NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "model" TEXT NOT NULL,
    "location" TEXT,
    "driver_id" INTEGER NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("vehicle_id")
);

-- CreateTable
CREATE TABLE "ShipmentRoute" (
    "route_id" SERIAL NOT NULL,
    "departure_city" TEXT NOT NULL,
    "arrival_city" TEXT NOT NULL,

    CONSTRAINT "ShipmentRoute_pkey" PRIMARY KEY ("route_id")
);

-- CreateTable
CREATE TABLE "_ShipmentRouteToVehicle" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_phone_number_key" ON "Customer"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "Branch_manager_id_key" ON "Branch"("manager_id");

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_driver_id_key" ON "Vehicle"("driver_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ShipmentRouteToVehicle_AB_unique" ON "_ShipmentRouteToVehicle"("A", "B");

-- CreateIndex
CREATE INDEX "_ShipmentRouteToVehicle_B_index" ON "_ShipmentRouteToVehicle"("B");

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_recipient_id_fkey" FOREIGN KEY ("recipient_id") REFERENCES "Customer"("customer_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_branch_sender_id_fkey" FOREIGN KEY ("branch_sender_id") REFERENCES "Branch"("branch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_branch_recipient_id_fkey" FOREIGN KEY ("branch_recipient_id") REFERENCES "Branch"("branch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Package" ADD CONSTRAINT "Package_carrier_id_fkey" FOREIGN KEY ("carrier_id") REFERENCES "Vehicle"("vehicle_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_super_id_fkey" FOREIGN KEY ("super_id") REFERENCES "Employee"("emp_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_branch_id_fkey" FOREIGN KEY ("branch_id") REFERENCES "Branch"("branch_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_manager_id_fkey" FOREIGN KEY ("manager_id") REFERENCES "Employee"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "Employee"("emp_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShipmentRouteToVehicle" ADD CONSTRAINT "_ShipmentRouteToVehicle_A_fkey" FOREIGN KEY ("A") REFERENCES "ShipmentRoute"("route_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShipmentRouteToVehicle" ADD CONSTRAINT "_ShipmentRouteToVehicle_B_fkey" FOREIGN KEY ("B") REFERENCES "Vehicle"("vehicle_id") ON DELETE CASCADE ON UPDATE CASCADE;
