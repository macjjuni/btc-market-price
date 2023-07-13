import { FaBitcoin } from 'react-icons/fa'
import { BsCurrencyBitcoin } from 'react-icons/bs'

const btcColor = '#f7931a'

export interface CryptoProp {
  label: string
  value: string
  ticker: string
  price: number
  icon: (size: number, color?: string) => JSX.Element
  icon2: (size: number, color?: string) => JSX.Element
  color: string
}

export const btcInfo: CryptoProp = {
  label: 'BTC(BitCoin)',
  value: 'btc',
  ticker: 'KRW-BTC',
  price: 0,
  icon: (size, color) => <FaBitcoin size={size || 28} color={color || btcColor} />,
  icon2: (size, color) => <BsCurrencyBitcoin size={size || 28} color={color || btcColor} />,
  color: btcColor,
}

export const upbitAsset = ['BTC/KRW']
export const binaceAsset = ['btcusdt']

export const ecoSystemPyramid = [
  { name: 'foo', min: 0, max: 0, emoji: '💩' },
  { name: 'shrimp', min: 0, max: 1, emoji: '🦐' },
  { name: 'crab', min: 1, max: 10, emoji: '🦀' },
  { name: 'octopus', min: 10, max: 50, emoji: '🐙' },
  { name: 'fish', min: 50, max: 100, emoji: '🐟' },
  { name: 'dolphin', min: 100, max: 500, emoji: '🐬' },
  { name: 'shark', min: 500, max: 1000, emoji: '🦈' },
  { name: 'whale', min: 1000, max: 5000, emoji: '🐳' },
  { name: 'humpback', min: 5000, max: 100000, emoji: '🐋' },
]
