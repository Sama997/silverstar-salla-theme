# Silver Star - Salla Premium Conversion Layer

هذا الملف مخصص لحقن طبقة تحسين تصميم وتجربة بيع داخل متجر Silver Star على منصة سلة.

## الملفات

- `assets/silverstar-enhance.css`  
  ملف تنسيقات الهوية والتحسينات البصرية.

- `assets/silverstar-enhance.js`  
  ملف حقن أقسام الصفحة الرئيسية، شريط الثقة، بطاقات المزايا، شارة الأكثر طلباً، وزر الجوال الثابت.

## طريقة الاستخدام عبر GitHub + jsDelivr

1. ارفع مجلد المشروع إلى Repository في GitHub.
2. بعد الرفع، استخدم روابط jsDelivr بهذا الشكل:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/USERNAME/REPOSITORY/assets/silverstar-enhance.css">
<script src="https://cdn.jsdelivr.net/gh/USERNAME/REPOSITORY/assets/silverstar-enhance.js" defer></script>
```

استبدل:

- `USERNAME` باسم حساب GitHub.
- `REPOSITORY` باسم المستودع.

## مكان الإضافة في سلة

من لوحة تحكم سلة:

الثيم > تخصيص > أكواد مخصصة أو Custom Code

ثم أضف الرابطين أعلاه قبل إغلاق وسم `</body>` إذا كان متاحاً، أو في خانة الأكواد المخصصة العامة.

## تعديل رقم الواتساب

افتح ملف:

`assets/silverstar-enhance.js`

ثم عدل السطر:

```js
const STORE_WHATSAPP = '966500000000';
```

إلى رقم المتجر بصيغة دولية بدون علامة +.

## ملاحظات مهمة

- التصميم لا يحذف أو يستبدل قالب سلة، بل يضيف طبقة تحسين قابلة للإزالة.
- في حال لم يظهر قسم الهيرو، تأكد أن الصفحة الرئيسية تستخدم عنصر `main` أو أن القالب يسمح بحقن JavaScript.
- يفضل تجربة الملفات أولاً في نسخة معاينة أو خارج أوقات الذروة.
