import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const products = [
  {
    name_en: "Covix Care HAVÉRA Shampoo - Argan & Almond",
    name_ar: "كوفيكس كير هافيرا شامبو - الأرجان وزيت اللوز",
    slug: "covix-care-havera-shampoo-argan-almond-450ml",
    description_en: 'Slogan: "Helps reduce hair fall and strengthens strands with Caffeine & Biotin."\n\nProduct Description: Covix Care HAVÉRA Shampoo delivers complete hair care suitable for all hair types. Formulated with Caffeine and Biotin alongside nourishing Argan and Almond oil, it effectively fortifies hair follicles, helps reduce hair fall, and leaves your hair noticeably soft, vibrant, and healthy.',
    description_ar: 'الشعار المقترح (Slogan): "يساعد على تقليل تساقط الشعر ويمنحه القوة بالكافيين والبيوتين."\n\nوصف المنتج: شامبو هافيرا من كوفيكس كير يقدم عناية متكاملة ومناسبة لجميع أنواع الشعر. يتميز بتركيبة مدعمة بالكافيين والبيوتين مع خلاصة الأرجان وزيت اللوز، ليعمل بفاعلية على تغذية البصيلات والمساعدة في تقليل تساقط الشعر ومنحه النعومة والمظهر الحيوي الصحي.',
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554224/Havera1_sqobcb.png"],
    best_selling: false
  },
  {
    name_en: "Covix Care HAVÉRA Shampoo - Avocado Oil & Shea Butter",
    name_ar: "كوفيكس كير هافيرا شامبو - الأفوكادو وزبدة الشيا",
    slug: "covix-care-havera-shampoo-avocado-oil-shea-butter-450ml",
    description_en: 'Slogan: "Helps strengthen hair and reduce breakage with Caffeine & Biotin."\n\nProduct Description: Covix Care HAVÉRA Shampoo provides intensive care suitable for all hair types. Infused with Caffeine and Biotin alongside rich Avocado Oil and Shea Butter, it deeply hydrates and fortifies hair strands, effectively helping reduce breakage and split ends while restoring natural shine and resilience.',
    description_ar: 'الشعار المقترح (Slogan): "يساعد على تقوية الشعر وتقليل التقصف بالكافيين والبيوتين."\n\nوصف المنتج: شامبو هافيرا من كوفيكس كير مصمم بعناية ليناسب جميع أنواع الشعر. يحتوي على تركيبة غنية بالكافيين والبيوتين مدعومة بزيت الأفوكادو وزبدة الشيا، ليعمل على تغذية وترطيب ألياف الشعر بعمق، تقوية الخصلات الضعيفة، والمساعدة الفعالة في تقليل التقصف والهيشان.',
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554302/Havera2_glp6uv.png"],
    best_selling: false
  },
  {
    name_en: "Covix Care HAVÉRA Shampoo - Castor Oil and Marjoram",
    name_ar: "كوفيكس كير هافيرا شامبو - الخروع والبردقوش",
    slug: "covix-care-havera-shampoo-castor-oil-marjoram-450ml",
    description_en: 'Slogan: "Helps strengthen hair and provides softness and vitality with Caffeine & Biotin."\n\nProduct Description: Covix Care HAVÉRA Shampoo delivers advanced nourishment suitable for all hair types. Formulated with Caffeine and Biotin combined with rich Castor Oil and Marjoram, it works effectively to fortify hair follicles, improve hair resilience, and impart remarkable softness, vitality, and healthy bounce.',
    description_ar: 'الشعار المقترح (Slogan): "يساعد على تقوية الشعر ويعطيه نعومة وحيوية بالكافيين والبيوتين."\n\nوصف المنتج: شامبو هافيرا من كوفيكس كير يقدم عناية متكاملة تناسب جميع أنواع الشعر. يتميز بتركيبة فعالة غنية بالكافيين والبيوتين ومدعمة بفوائد زيت الخروع وخلاصة البردقوش، ليعمل على تقوية خصلات الشعر من الجذور حتى الأطراف، تعزيز كثافته، ومنحه النعومة والانسيابية مع لمعان وحيوية تدوم.',
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554258/Havera3_bru5kx.png"],
    best_selling: false
  },
  {
    name_en: "Covix Care HAVÉRA Shampoo - Garlic",
    name_ar: "كوفيكس كير هافيرا شامبو - الثوم",
    slug: "covix-care-havera-shampoo-garlic-450ml",
    description_en: 'Slogan: "For healthy and purified hair with Garlic, Caffeine & Biotin."\n\nProduct Description: Covix Care HAVÉRA Shampoo delivers advanced purifying care suitable for all hair types. Formulated with potent Garlic extract combined with Caffeine and Biotin, it cleanses and purifies the scalp, strengthens hair follicles from root to tip, and promotes visibly healthy, resilient, and refreshed hair.',
    description_ar: 'الشعار المقترح (Slogan): "لشعر صحي ونقي بقوة الثوم المعززة بالكافيين والبيوتين."\n\nوصف المنتج: شامبو هافيرا من كوفيكس كير يقدم عناية متقدمة تناسب جميع أنواع الشعر. يحتوي على تركيبة غنية بخلاصة الثوم المعروفة بخصائصها المقوية والمطهرة لفروة الرأس، ومدعمة بالكافيين والبيوتين لتحفيز البصيلات، تنقية الشعر من الرواسب، ومنحه مظهراً صحياً، قوياً، وأكثر كثافة وانتعاشاً.',
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554248/Havera4_bva06r.png"],
    best_selling: false
  },
  {
    name_en: "Covix Care HAVÉRA Shampoo - Horsetail & Juniper",
    name_ar: "كوفيكس كير هافيرا شامبو - ذيل الحصان والعرعر",
    slug: "covix-care-havera-shampoo-horsetail-juniper-450ml",
    description_en: 'Slogan: "Helps strengthen hair and stimulates growth with Caffeine & Biotin."\n\nProduct Description: Covix Care HAVÉRA Shampoo delivers targeted strengthening care suitable for all hair types. Infused with Caffeine and Biotin alongside Horsetail and Juniper extracts, it revitalizes the scalp, fortifies hair strands from the roots, and stimulates healthy hair growth for a fuller, stronger, and more resilient look.',
    description_ar: 'الشعار المقترح (Slogan): "يساعد على تقوية الشعر وتحفيز نموه بالكافيين والبيوتين."\n\nوصف المنتج: شامبو هافيرا من كوفيكس كير مصمم بعناية ليناسب جميع أنواع الشعر. يتميز بتركيبة متطورة تجمع بين الكافيين والبيوتين وخلاصة ذيل الحصان والعرعر، ليعمل على تنشيط الدورة الدموية في فروة الرأس، تقوية بصيلات الشعر وخصلاته من الجذور، وتحفيز نموه الطبيعي ليصبح أكثر كثافة وصحة وحيوية.',
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554176/Havera5_sd7brs.png"],
    best_selling: false
  }
];

async function insertProducts() {
  console.log("Starting product insertion...");
  for (const p of products) {
    const { data, error } = await supabase
      .from('bonnfood_products')
      .insert([p])
      .select();
    
    if (error) {
      console.error(`Error inserting ${p.slug}:`, error.message);
    } else {
      console.log(`Inserted ${p.slug}`);
    }
  }
  console.log("Done.");
}

insertProducts();
