#!/bin/bash

echo "Creating Inventory Management App folder structure..."

# Navigate to app directory
cd inventory-management-app || exit

# Root level files
touch .env.example .env.local .gitignore tailwind.config.js tsconfig.json components.json README.md

# Prisma setup
mkdir -p prisma/migrations
touch prisma/schema.prisma prisma/seed.ts

# Public assets
mkdir -p public/icons public/images
touch public/favicon.ico

# App router
mkdir -p src/app/api/{auth/[...nextauth],upload,export/products,export/sales,export/reports,webhooks}
mkdir -p src/app/(auth)/{login,register} src/app/(dashboard)/{dashboard,products/add,products/[id]/edit,products/components,sales/new,sales/[id],sales/components,purchases/new,purchases/[id],purchases/components,inventory/components,customers/add,customers/[id],customers/components,suppliers/add,suppliers/[id],suppliers/components,reports/components,settings/store,settings/user,settings/components}
touch src/app/globals.css src/app/layout.tsx src/app/page.tsx src/app/loading.tsx src/app/error.tsx src/app/not-found.tsx
touch src/app/api/auth/[...nextauth]/route.ts
touch src/app/api/upload/route.ts
touch src/app/api/export/products/route.ts src/app/api/export/sales/route.ts src/app/api/export/reports/route.ts
touch src/app/api/webhooks/route.ts
touch src/app/(auth)/layout.tsx src/app/(auth)/login/page.tsx src/app/(auth)/register/page.tsx
touch src/app/(dashboard)/layout.tsx src/app/(dashboard)/dashboard/page.tsx src/app/(dashboard)/dashboard/loading.tsx
touch src/app/(dashboard)/products/page.tsx src/app/(dashboard)/products/add/page.tsx src/app/(dashboard)/products/[id]/page.tsx src/app/(dashboard)/products/[id]/edit/page.tsx
touch src/app/(dashboard)/sales/page.tsx src/app/(dashboard)/sales/new/page.tsx src/app/(dashboard)/sales/[id]/page.tsx
touch src/app/(dashboard)/purchases/page.tsx src/app/(dashboard)/purchases/new/page.tsx src/app/(dashboard)/purchases/[id]/page.tsx
touch src/app/(dashboard)/inventory/page.tsx
touch src/app/(dashboard)/customers/page.tsx src/app/(dashboard)/customers/add/page.tsx src/app/(dashboard)/customers/[id]/page.tsx
touch src/app/(dashboard)/suppliers/page.tsx src/app/(dashboard)/suppliers/add/page.tsx src/app/(dashboard)/suppliers/[id]/page.tsx
touch src/app/(dashboard)/reports/page.tsx
touch src/app/(dashboard)/settings/page.tsx src/app/(dashboard)/settings/store/page.tsx src/app/(dashboard)/settings/user/page.tsx

# Components
mkdir -p src/components/ui src/components/common src/components/forms src/components/charts src/components/animations
touch src/components/ui/{button.tsx,input.tsx,card.tsx,table.tsx,dialog.tsx,form.tsx,select.tsx,badge.tsx,alert.tsx,toast.tsx,dropdown-menu.tsx,sheet.tsx,tabs.tsx,calendar.tsx,date-picker.tsx,data-table.tsx}
touch src/components/common/{Header.tsx,Sidebar.tsx,Footer.tsx,Navbar.tsx,SearchBar.tsx,Pagination.tsx,LoadingSpinner.tsx,ErrorBoundary.tsx,ConfirmDialog.tsx,DateRangePicker.tsx,FileUpload.tsx,EmptyState.tsx,ThemeToggle.tsx}
touch src/components/forms/{FormField.tsx,FormSelect.tsx,FormTextarea.tsx,FormCheckbox.tsx,FormRadio.tsx,FormDatePicker.tsx}
touch src/components/charts/{BarChart.tsx,LineChart.tsx,PieChart.tsx,AreaChart.tsx}
touch src/components/animations/{FadeIn.tsx,SlideIn.tsx,PageTransition.tsx,AnimatedCounter.tsx}

# Lib
mkdir src/lib
touch src/lib/{auth.ts,db.ts,utils.ts,constants.ts,formatters.ts,validators.ts,email.ts,upload.ts,pdf.ts,excel.ts,api-client.ts}

# Store
mkdir -p src/store/slices
touch src/store/{index.ts,rootReducer.ts,middleware.ts}
touch src/store/slices/{authSlice.ts,uiSlice.ts,formSlice.ts,cacheSlice.ts,settingsSlice.ts}

# Types
mkdir src/types
touch src/types/{index.ts,api.ts,auth.ts,product.ts,sale.ts,purchase.ts,inventory.ts,customer.ts,supplier.ts,user.ts,store.ts,report.ts,common.ts,form.ts}

# Schemas (Zod)
mkdir src/schemas
touch src/schemas/{index.ts,auth.ts,product.ts,sale.ts,purchase.ts,inventory.ts,customer.ts,supplier.ts,user.ts,store.ts,common.ts}

# Hooks
mkdir src/hooks
touch src/hooks/{useAuth.ts,useLocalStorage.ts,useDebounce.ts,usePagination.ts,useSearch.ts,useFilters.ts,useServerAction.ts,useOptimisticUpdate.ts,useFormState.ts,usePermissions.ts}

# Actions (Server actions)
mkdir -p src/actions/{auth,products,sales,purchases,inventory,customers,suppliers,reports,settings,common}
touch src/actions/auth/{login.ts,register.ts,logout.ts,resetPassword.ts}
touch src/actions/products/{createProduct.ts,updateProduct.ts,deleteProduct.ts,getProducts.ts,getProduct.ts,bulkUpdateProducts.ts}
touch src/actions/sales/{createSale.ts,updateSale.ts,deleteSale.ts,getSales.ts,getSale.ts,generateInvoice.ts}
touch src/actions/purchases/{createPurchase.ts,updatePurchase.ts,deletePurchase.ts,getPurchases.ts,getPurchase.ts}
touch src/actions/inventory/{updateStock.ts,getInventory.ts,adjustStock.ts,stockAlert.ts,stockTransfer.ts}
touch src/actions/customers/{createCustomer.ts,updateCustomer.ts,deleteCustomer.ts,getCustomers.ts,getCustomer.ts,getCustomerDue.ts}
touch src/actions/suppliers/{createSupplier.ts,updateSupplier.ts,deleteSupplier.ts,getSuppliers.ts,getSupplier.ts}
touch src/actions/reports/{getSalesReport.ts,getInventoryReport.ts,getProfitLossReport.ts,getCustomerReport.ts,exportReport.ts}
touch src/actions/settings/{updateStoreSettings.ts,updateUserSettings.ts,getStoreSettings.ts,getUserSettings.ts}
touch src/actions/common/{uploadFile.ts,deleteFile.ts,sendEmail.ts,backup.ts}

# Data Access Layer
mkdir src/data
touch src/data/{auth.ts,products.ts,sales.ts,purchases.ts,inventory.ts,customers.ts,suppliers.ts,users.ts,settings.ts,reports.ts}

# Services
mkdir src/services
touch src/services/{email.ts,payment.ts,backup.ts,notification.ts,pdf.ts,excel.ts,audit.ts}

# Middleware
touch src/middleware.ts

echo "✅ Project structure generated successfully."
