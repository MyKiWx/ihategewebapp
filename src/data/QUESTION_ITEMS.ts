import { QuestionItem } from "../interface/QuestionItem";

export const QUESTION_ITEMS1: Array<QuestionItem> = [
    {
        label: 'เพศ',
        choices: ['ชาย', 'หญิง', 'อื่นๆ'],
        typeBox: 'radio'
    },
    // {
    //     label: 'ช่วงอายุ (ปี)',
    //     choices: ['16 - 20', '21 - 25', '26 - 30', 'มากกว่า 30'],
    //     typeBox: 'radio'
    // },
    {
        label: 'สถานะของผู้ทำแบบสำรวจ',
        choices: ['นักศึกษา', 'บุคคลกร'],
        placeholder: 'เลือกคณะ',
        typeBox: 'radio'
    },
    {
        label: 'ระดับชั้นปีที่กำลังศึกษา (กรณีตอบว่าเป็นนักศึกษา)',
        choices: ['-','1', '2', '3', '4', '4 ขึ้นไป'],
        typeBox: 'radio'
    },
    {
        label: 'คณะที่กำลังศึกษา (กรณีตอบว่าเป็นนักศึกษา)',
        placeholder: 'เลือกคณะ',
        choices: ['คณะวิทยาศาสตร์', 'คณะเกษตรศาสตร์', 'คณะวิศวกรรมศาสตร์', 'คณะศึกษาศาสตร์', 'คณะแพทยศาสตร์', 'คณะพยาบาลศาสตร์', 'คณะเทคนิคการแพทย์', 'คณะทันตแพทยศาสตร์', 'คณะสาธารณสุขศาสตร์', 'คณะเภสัชศาสตร์', 'คณะสัตวแพทยศาสตร์', 'คณะมนุษยศาสตร์และสังคมศาสตร์', 'วิทยาลัยนานาชาติ', 'คณะเทคโนโลยี', 'คณะสถาปัตยกรรมศาสตร์', 'คณะบริหารธุรกิจและการบัญชี', 'คณะศิลปกรรมศาสตร์', 'คณะนิติศาสตร์', 'วิทยาลัยการปกครองส่วนท้องถิ่น', 'คณะเศรษฐศาสตร์'],
    },
    {
        label: 'ข้อมูลที่ผู้ทดสอบกรอก จะนำไปเป็นส่วนหนึ่งในการทำโครงงานวิชา GE',
        choices: [],
        descrip: 'ยินดี',
    }
]
export const QUESTION_ITEMS2: Array<QuestionItem> = [
    {
        label: 'นอนไม่หลับเพราะคิดมากหรือกังวลใจ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกหงุดหงิด รำคาญใจ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ทำอะไรไม่ได้เพราะประสาทตึงเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'มีความวุ่นวายใจ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ไม่อยากพบปะผู้คน',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ปวดหัวข้างเดียว หรือปวดบริเวณขมับทั้ง 2 ข้าง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกไม่มีความสุขและเศร้าหมอง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกหมดหวังในชีวิต',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกว่าชีวิตของตนไม่มีคุณค่า',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'กระวนกระวายอยู่ตลอดเวลา',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกว่าตนเองไม่มีสมาธิ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกเพลียไม่มีแรงจะทำอะไร',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกเหนื่อยไม่อยากทำอะไร',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'มีอาการหัวใจเต้นแรง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'เสียงสั่น ปากสั่น หรือมือสั่นเวลาไม่พอใจ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกกลัวผิดพลาดในการทำสิ่งต่างๆ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ปวด หรือเกร็งกล้ามเนื้อบริเวณท้ายทอยหลัง หรือไหล่',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ตื่นเต้นง่ายกับเหตุการณ์ไม่คุ้นเคย',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'มึนงงหรือเวียนศีรษะ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ความสุขทางเพศลดลง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    
]
export const QUESTION_ITEMS3: Array<QuestionItem> = [
    {
        label: 'เบื่อ ไม่สนใจอยากทำอะไร',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ไม่สบายใจ ซึมเศร้า ท้อแท้',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'หลับยากหรือหลับๆตื่นๆหรือหลับมากไป',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'เหนื่อยง่ายหรือไม่ค่อยมีแรง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'เบื่ออาหารหรือกินมากเกินไป',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'รู้สึกไม่ดีกับตัวเอง คิดว่าตัวเองล้มเหลวหรือครอบครัวผิดหวัง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'สมาธิไม่ดี เวลาทำอะไร เช่น ดูโทรทัศน์ ฟังวิทยุ หรือทำงานที่ต้องใช้ความ ตั้งใจ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'พูดช้า ทำอะไรช้าลงจนคนอื่นสังเกตเห็นได้หรือกระสับกระส่ายไม่สามารถ อยู่นิ่งได้เหมือนที่เคยเป็น',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'คิดทำร้ายตนเอง หรือคิดว่าถ้าตายไปคงจะดี',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
]
export const QUESTION_ITEMS4: Array<QuestionItem> = [
    {
        label: 'คิดอยากตาย หรือ คิดว่าตายไปจะดีกว่า',
        choices: ['0', '1'],
        typeBox: 'tableRadio'
    },
    {
        label: 'อยากทำร้ายตัวเอง หรือ ทำให้ตัวเองบาดเจ็บ',
        choices: ['0', '2'],
        typeBox: 'tableRadio'
    },
    {
        label: 'คิดเกี่ยวกับการฆ่าตัวตาย',
        choices: ['0', '6'],
        typeBox: 'tableRadio'
    },
    {
        label: 'สามารถควบคุมความอยากฆ่าตัวตายที่ท่านคิดอยู่นั้นได้หรือไม่',
        choices: ['0', '8'],
        typeBox: 'tableRadio'
    },
    {
        label: 'มีแผนการที่จะฆ่าตัวตาย',
        choices: ['0', '8'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ได้เตรียมการที่จะทำร้ายตนเองหรือเตรียมการจะฆ่าตัวตายโดย ตั้งใจว่าจะให้ตายจริง ๆ',
        choices: ['0', "9"],
        typeBox: 'tableRadio'
    },
    {
        label: 'ได้ทำให้ตนเองบาดเจ็บแต่ไม่ตั้งใจที่จะทำให้เสียชีวิต',
        choices: ['0', '4'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ได้พยายามฆ่าตัวตายโดยคาดหวัง/ตั้งใจที่จะให้ตาย',
        choices: ['0', '10'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ท่านเคยพยายามฆ่าตัวตาย',
        choices: ['0', '4'],
        typeBox: 'tableRadio'
    },
    
]
export const QUESTION_ITEMS5: Array<QuestionItem> = [
    {
        label: 'ฉันคิดว่าทุกปัญหามีทางออกเสมอ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันคิดว่าทุกปัญหาที่เกิดขึ้นจะเป็นแบบทดสอบในการพัฒนาตัวเอง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันพยายามหาข้อดีจากปัญหาที่เกิดขึ้น',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันคิดว่าหลังจากทุกปัญหาคลี่คลายมักมีเรื่องดีเกิดขึ้นเสมอ',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันคิดว่าเวลาจะเยียวยาความเครียดของตัวเอง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะฟังเพลงหรือเล่นเครื่องดนตรี',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะนั่งสมาธิหรือกำหนดลมหายใจของตัวเอง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะทำงานศิลปะเพื่อระบายความเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะอ่านหนังสือเพื่อระบายความเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: '1ฉันมักทำงานอดิเรกเพื่อระบายความเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: '1ฉันมักจะออกไปท่องเที่ยวเพื่อระบายความเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะออกไปสังสรรค์เพื่อระบายความเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะเขียนบันทึกความรู้สึกของตัวเอง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะร้องไห้เพื่อระบายความเครียด',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะโทษคนอื่นเมื่อเกิดปัญหา',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
    {
        label: 'ฉันมักจะปรับทุกข์กับคนในครอบครัวหรือคนรอบข้างตัวเอง',
        choices: ['0', '1', '2', '3'],
        typeBox: 'tableRadio'
    },
]
