-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nio" TEXT,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "assignedUrl" TEXT,
    "role" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContainerInformation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "previewUrl" TEXT,
    "containerId" TEXT NOT NULL,

    CONSTRAINT "ContainerInformation_pkey" PRIMARY KEY ("id")
);
