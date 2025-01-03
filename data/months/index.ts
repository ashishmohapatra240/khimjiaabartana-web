import { januaryData } from './january';
import { februaryData } from './february';
import { marchData } from './march';
import { aprilData } from './april';
import { mayData } from './may';
import { juneData } from './june';
import { julyData } from './july';
import { augustData } from './august';
import { septemberData } from './september';
import { octoberData } from './october';
import { novemberData } from './november';
import { decemberData } from './december';
import { MonthData } from '@/types/month';

export const monthsData: Record<number, MonthData> = {
    1: januaryData,
    2: februaryData,
    3: marchData,
    4: aprilData,
    5: mayData,
    6: juneData,
    7: julyData,
    8: augustData,
    9: septemberData,
    10: octoberData,
    11: novemberData,
    12: decemberData,
};