import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Inicio', href: 'inicio'},
    { name: 'Nosotros', href: 'nosotros'},
    { name: 'Nuestros Servicios', href: 'nuestrosServicios'},
    { name: 'Ubicacion', href: 'ubicacion'},
    { name: 'Contacto', href: 'contacto'},
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function scrollNav(e, targetId = 'inicio') {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
        });
    }
}

export const Navbar = () => {
    return (
        <Disclosure as="nav" className="color-primario sticky top-0 z-[100] py-2">
        {({ open }) => (
            <>
            <div className="max-w-full ">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 end-0.5 flex items-center md:hidden">
                        {/* Mobile menu button*/}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                        </Disclosure.Button>
                    </div>
                    <div className="flex flex-1 items-center justify-between">
                        <a href="inicio"  onClick={(e) => scrollNav(e)}>
                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="h-[64px] w-auto ml-1"
                                    src="/GRS-LogoNavbar.png"
                                    alt="Your Company"
                                />
                            </div>
                        </a>
                        <div className="hidden md:ml-6 md:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                <a
                                    onClick={(e) => scrollNav(e, item.href)}
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-md font-bold'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <Disclosure.Button
                        onClick={(e) => scrollNav(e, item.href)}
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
                </div>
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    )
}
