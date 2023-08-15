import Link from 'next/link'

interface NavItemProps {
  title: string
}

export function NavItem({ title }: NavItemProps) {
  return (
    <Link href="" className="flex items-center gap-3 rounded px-3 py-2">
      <span className="font-medium text-neutral-400 hover:text-neutral-300">
        {title}
      </span>
    </Link>
  )
}
