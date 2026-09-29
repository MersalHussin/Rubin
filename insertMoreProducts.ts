import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

const products = [
  {
    name_en: "HAVÉRA Shampoo - Olive Oil",
    name_ar: "هافيرا شامبو - زيت الزيتون",
    slug: "havera-shampoo-olive-oil-450ml",
    slogan_en: "Helps moisturize and soften hair with Caffeine & Biotin.",
    slogan_ar: "يساعد على ترطيب ونعومة الشعر بالكافيين والبيوتين.",
    description_en: "HAVÉRA Shampoo with Olive Oil is suitable for all hair types. Formulated with Caffeine and Biotin alongside nourishing Olive Oil, it effectively helps moisturize and soften hair strands, leaving them smooth, vibrant, and healthy.",
    description_ar: "شامبو هافيرا بزيت الزيتون مصمم ليناسب جميع أنواع الشعر. يحتوي على تركيبة غنية بالكافيين والبيوتين مدعومة بزيت الزيتون، ليساعد بفاعلية على ترطيب الشعر ومنحه النعومة والانسيابية الفائقة مع مظهر صحي ولامع.",
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554237/Havera6_td188a.png"],
    best_selling: false
  },
  {
    name_en: "HAVÉRA Shampoo - Propolis Extract",
    name_ar: "هافيرا شامبو - العكبر",
    slug: "havera-shampoo-propolis-extract-450ml",
    slogan_en: "For stronger, more revitalized hair with Caffeine & Biotin.",
    slogan_ar: "لشعر أكثر قوة وحيوية بالكافيين والبيوتين.",
    description_en: "HAVÉRA Shampoo with Propolis Extract is suitable for all hair types. Enriched with Caffeine and Biotin alongside nourishing Propolis extract, it helps purify the scalp and reinforce hair fibers from within, leaving your hair visibly stronger, healthier, and full of vitality.",
    description_ar: "شامبو هافيرا بالعكبر مصمم ليناسب جميع أنواع الشعر. يتميز بتركيبة مدعومة بالكافيين والبيوتين مع خلاصة العكبر (صمغ النحل)، ليعمل على تنقية فروة الرأس وتغذية البصيلات، مما يمنح خصلات الشعر حماية طبيعية وقوة إضافية ومظهراً صحياً مفعماً بالحيوية.",
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554247/Havera7_xtylsm.png"],
    best_selling: false
  },
  {
    name_en: "HAVÉRA Shampoo - Rosemary & Peppermint Oil",
    name_ar: "هافيرا شامبو - إكليل الجبل والنعناع",
    slug: "havera-shampoo-rosemary-peppermint-oil-450ml",
    slogan_en: "Helps thicken and soften hair with Caffeine & Biotin.",
    slogan_ar: "يساعد على تكثيف وتنعيم الشعر بالكافيين والبيوتين.",
    description_en: "HAVÉRA Shampoo with Rosemary & Peppermint Oil is suitable for all hair types. Formulated with Caffeine and Biotin alongside revitalizing Rosemary and Peppermint oil, it refreshes the scalp, promotes hair density, and leaves hair soft and manageable.",
    description_ar: "شامبو هافيرا بإكليل الجبل والنعناع مناسب لجميع أنواع الشعر. يتميز بتركيبة مدعمة بالكافيين والبيوتين وخلاصة إكليل الجبل وزيت النعناع المنعش، ليعمل بفعالية على تنشيط فروة الرأس والمساعدة في تكثيف الشعر وتنعيمه من الجذور حتى الأطراف.",
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554306/Havera8_vcnxll.png"],
    best_selling: false
  },
  {
    name_en: "HAVÉRA Shampoo - Wheat Germ Oil",
    name_ar: "هافيرا شامبو - جنين القمح",
    slug: "havera-shampoo-wheat-germ-oil-450ml",
    slogan_en: "Nourishes the scalp and restores hair vitality with Caffeine & Biotin.",
    slogan_ar: "يغذي فروة الرأس ويمنح الشعر حيوية بالكافيين والبيوتين.",
    description_en: "HAVÉRA Shampoo with Wheat Germ Oil is suitable for all hair types. Infused with Caffeine and Biotin alongside nutrient-rich Wheat Germ Oil, it deeply nourishes the scalp, strengthens hair strands, and leaves hair visibly softer, healthier, and full of bounce.",
    description_ar: "شامبو هافيرا بزيت جنين القمح مصمم بعناية ليناسب جميع أنواع الشعر. يحتوي على تركيبة متطورة غنية بالكافيين والبيوتين ومدعمة بزيت جنين القمح المغذي، ليعمل بفاعلية على تغذية فروة الرأس وترطيب خصلات الشعر من الجذور حتى الأطراف، مما يمنحه مظهراً صحياً، ناعماً وقوياً.",
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554267/Havera9_wao0zx.png"],
    best_selling: false
  },
  {
    name_en: "HAVÉRA Hair Spray - Heat and Color Protection",
    name_ar: "هافيرا بخاخ للشعر - لحماية الشعر من الصبغات والحرارة",
    slug: "havera-hair-spray-heat-color-protection-350ml",
    slogan_en: "Advanced defense against thermal styling and color fading.",
    slogan_ar: "حماية متكاملة لشعرك من أضرار الحرارة وبهتان الصبغات.",
    description_en: "HAVÉRA Hair Spray provides an advanced protective barrier for your hair strands. Specially formulated to shield hair from high heat styling damage while protecting colored hair from premature fading, it keeps your hair vibrant, smooth, resilient, and visibly healthy.",
    description_ar: "بخاخ الشعر من هافيرا يقدم درعاً واقياً ومتطوراً لخصلات شعرك، حيث صُمم خصيصاً لحماية الشعر الفعالة من تأثير أدوات التصفيف الحرارية وتقليل بهتان اللون الناتج عن الصبغات، مما يحافظ على حيوية شعرك ولمعانه الطبيعي وملمسه الصحي والناعم.",
    images: ["https://res.cloudinary.com/dzgztrsa0/image/upload/v1789554103/Havera_Heat_and_color_Protection__tua9re.jpg"],
    best_selling: false
  }
];

async function insertProducts() {
  console.log("Starting additional product insertion...");
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
