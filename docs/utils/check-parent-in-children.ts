// Types
import type { LinkItemProps } from '@/types/components/atoms/list-item'

const CheckParentInChildren = (items: LinkItemProps[], parent?: string) => items.some(item => (!parent && !item.parent) || item.parent === parent)

export default CheckParentInChildren
