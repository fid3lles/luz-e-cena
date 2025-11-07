import SelectorGroup from '../../Selector/SelectorGroup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../Selector/SelectorOption'

const cities = [
    { id: 1, value: 'sao-paulo', label: 'São Paulo' },
    { id: 2, value: 'rio-de-janeiro', label: 'Rio de Janeiro' },
];

const HeaderFormFilters = () => {
  return (
    <form>
        <SelectorGroup id='cidade' icon={<FaLocationDot></FaLocationDot>}>
            <SelectorOption value='' label='Escolha sua cidade...' />
            {
                cities.map((city) => (
                    <SelectorOption 
                        key={city.id} 
                        value={city.value} 
                        label={city.label} 
                    />
                ))
            }
        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters