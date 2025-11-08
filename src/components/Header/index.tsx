import Logo from "../Logo"
import HeaderActions from "./components/HeaderActions"
import HeaderFormFilters from "./components/HeaderFormFilters"
import HeaderList from "./components/HeaderList"
import HeaderListItem from "./components/HeaderListItem"

const Header = () => {
  return (
    <header>
      <HeaderList>
        <HeaderListItem>
          <Logo src="../../../luz-e-cena/public/Logo e Favicon/logo_preto.png" alt="Logo" />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderFormFilters />
        </HeaderListItem>
        <HeaderListItem>
          <HeaderActions />
        </HeaderListItem>
      </HeaderList>
    </header>
  )
}

export default Header