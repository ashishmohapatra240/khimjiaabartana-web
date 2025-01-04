export type MoonType = 'Purnima' | 'Amavasya' | 'KrishnaPakshaEkadashi' | 'ShuklaPakshaEkadashi';

export const moonData: Record<MoonType, { icon: string }> = {
    Purnima: {
        icon: '/icons/moons/poornima.svg'
    },
    Amavasya: {
        icon: '/icons/moons/amavasya.svg'
    },
    KrishnaPakshaEkadashi: {
        icon: '/icons/moons/krishna_paksha_ekadashi.svg'
    },
    ShuklaPakshaEkadashi: {
        icon: '/icons/moons/shukla_paksha_ekadashi.svg'
    }
};