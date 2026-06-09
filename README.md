# Silver Star Celia Premium

إعادة بناء عربية RTL لثيم Silver Star على بنية Salla Twilight.

## نتيجة الفحص

- لم تكن هناك بنية Twilight كاملة في المستودع: لا يوجد `twilight.json`، ولا `src/views/layouts/master.twig`، ولا صفحات Twig.
- الموجود سابقًا كان ملفات حقن CSS/JS وملفات ZIP؛ ولا يفرض الثيم الآن قسم أجهزة شعر مخصص، حتى يستطيع التاجر إضافته من مكونات سلة الرسمية عند الحاجة.
- المستودع المحلي على `main` متقدم بكمت واحد ومتأخر عن `origin/main` بعدة كمتات، مع تعديلات موجودة على `silverstar-home.css` و`silverstar-home.js`. لم يتم عكس هذه التعديلات.
- مكتبة الأصول الفعلية موجودة خارج المشروع في `/Users/apple/Desktop/Silver Star Assets`، وتم نسخ الأصول المناسبة إلى `src/assets`.

## البنية الجديدة

```text
src/
  assets/
    images/
    videos/
    styles/silverstar.css
    js/silverstar.js
  views/
    layouts/master.twig
    components/
      header/header.twig
      footer/footer.twig
      home/
      product/
      silverstar/
    pages/
      index.twig
      cart.twig
      thank-you.twig
    product/
      index.twig
      single.twig
twilight.json
docs/asset-map.md
```

## مسار تجربة العميل

1. الصفحة الرئيسية تعرض المنتج مباشرة، مزايا الجاف والرطب، مقارنة 15/30 لتر، وفيديو تجفيف السيراميك، مع ترك أقسام المنتجات الإضافية لمكونات سلة الرسمية.
2. صفحة التصنيف تدعم الفلاتر، الفرز، وبطاقات منتجات تركز على المواصفات.
3. صفحة المنتج تعرض صور المنتج، السعر، التقييم، الثقة، خيارات المنتج، جدول مواصفات، فيديو تجربة، وشريط إضافة للسلة ثابت.
4. السلة تعرض خطوات checkout، عناصر الطلب، ملخص الدفع، وزر إتمام الطلب.

## ملاحظات Salla

- القوالب تستخدم مسارات Twilight القياسية داخل `src/views`.
- الأصول تُستدعى عبر فلتر `asset`.
- تم استخدام مكونات Salla الجاهزة مثل `salla-search` و`salla-cart-summary` و`salla-filters` و`salla-add-product`.
- عند توفر Salla CLI، شغّل المعاينة من جذر الثيم للتحقق داخل بيئة Twilight الفعلية.

## الملفات الجاهزة

- حزمة الثيم النظيفة: `dist/silverstar-celia-premium-twilight.zip`
- معاينة محلية ثابتة للفحص البصري: `preview/index.html`
