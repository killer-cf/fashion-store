import { DialogFilter } from '@/components/DialogFilter'
import { DropdownSelect } from '@/components/DropdownSelect'
import { Filters } from '@/components/Filters'

export default function Products() {
  return (
    <div className="max-w-7xl px-8">
      <div className="py-12 text-center">
        <h2 className="text-lg font-semibold tracking-[.1em] text-neutral-900">
          SHOP
        </h2>
      </div>
      <section className="flex justify-center">
        <div className="mr-5 hidden min-w-[150px] max-w-xs md:block">
          <Filters />
        </div>
        <div className="flex-1">
          <div className="flex justify-end gap-3">
            <div className="flex-1 sm:flex-grow-0 md:hidden">
              <DialogFilter>
                <button className="h-8 w-full border border-neutral-700 px-4 text-sm text-neutral-600 sm:w-20">
                  Filters
                </button>
              </DialogFilter>
            </div>
            <div className="mb-4">
              <DropdownSelect />
            </div>
          </div>
          <div className="grid flex-1 justify-center gap-4 bg-slate-300 sm:grid-cols-3 lg:grid-cols-4">
            <div className="h-44 bg-red-300">produto 1</div>
            <div className="h-44 bg-red-300">produto 2</div>
            <div className="h-44 bg-red-300">produto 3</div>
            <div className="h-44 bg-red-300">produto 4</div>
            <div className="h-44 bg-red-300">produto 5</div>
          </div>
        </div>
      </section>
    </div>
  )
}
