-- CreateTable
CREATE TABLE "ContactForm" (
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ContactForm_email_key" ON "ContactForm"("email");
