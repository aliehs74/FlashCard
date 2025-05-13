# 📚 داشبورد مدیریت ترجمه

یک برنامه وب برای مدیریت ترجمه کلمات به چند زبان با قابلیت‌های ویرایش، افزودن و مرتب‌سازی.

![پیش‌نمایش](./public-view.png)

## ✨ ویژگی‌ها

- **داشبورد مدیریت**  
  - ویرایش ترجمه‌های موجود  
  - افزودن کلمات جدید با ترجمه  
  - مرتب‌سازی آیتم‌ها با Drag & Drop  
  - اعتبارسنجی فیلدها با Regex

- **نمایش عمومی**  
  - جستجو و فیلتر کلمات  
  - تغییر زبان نمایش  
  - انیمیشن‌های روان با Framer Motion

- **فناوری‌ها**  
  - React + TypeScript  
  - Context API برای مدیریت وضعیت  
  - localStorage برای ذخیره داده‌ها  
  - @dnd-kit/core برای Drag & Drop

## 🚀 راه‌اندازی

1. کلون پروژه:
```bash
git clone https://github.com/aliehs74/FlashCard.git

```

2. نصب وابستگی‌ها:

```bash
npm install
```

3. اجرای برنامه:

```bash
npm start
```


## 🗂 ساختار پروژه
```bash

src/
├── components/
│   ├── DraggableList.tsx
│   ├── ManagementDashboard.tsx
│   └── PublicView.tsx
├── context/
│   └── AppContext.tsx
├── types.ts
└── utils/
    └── localStorage.ts
```