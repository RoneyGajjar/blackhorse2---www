import { Button } from '../atoms/Button'
import { Logo } from '../atoms/logo'

const Navbar = () => {
    return (
        <section className='w-full max-w-7xl mx-auto'>
            <div className='w-full max-w-7xl mx-auto flex justify-between items-center'>
                <Logo />
                <Button variant="primary" data-cal-namespace="15min" data-cal-link="black-horse-associates-yce8pc/15min" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>
                    Book a Consultation
                </Button>
            </div>
        </section>
    )
}

export default Navbar;