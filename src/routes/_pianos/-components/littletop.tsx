// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/_pianos/')({
//     component: Littletop,
// })



export default function Littletop ({ setShow }: { setShow: (value: boolean) => void }) {
    return (
        <div className="text-white top-0">
            <div className="fixed top-0 z-30 sm:left-3 xl:left-5">
                <button
                type="button"
                aria-label="menu"
                onClick={() => {
                    setShow(true);
                }}
                className="cursor-pointer pt-3 pb-2 px-3"
                >
                {/* <Menu className="w-10 h-10 stroke-1 hover:stroke-2" /> */}
                </button>
            </div>
            <div className="littletop fixed top-0 h-16 bg-[#c2000099] z-10 w-screen">
                <div
                id="domain"
                className="text-2xl h-16 m-auto pt-4 pl-0 text-center dark:text-[#ccc]"
                >
                Enrique Arzamendi
                </div>
            </div>
            {/* <div className="fixed top-0 w-screen z-20 sm:pr-6 xl:pr-8">
                <MyModeToggle />
            </div> */}
        </div>
    );
}


