// npm modules
import { Link } from 'react-router-dom'

// components
import Icon from '../Icon/Icon'
import AuthorInfo from '../AuthorInfo/AuthorInfo'

// css
import styles from '../MonthlySheetCard/MonthlySheetCard.module.css'

const MonthlySheetCard = ({ sheet }) => {
  return (
    <Link to={`/monthlySheets/${sheet._id}`}>
      <article className={styles.container}>
        <header>
          <span>
            <h1>{sheet.name}</h1>
            <Icon category={sheet.category} />
          </span>
          <AuthorInfo content={sheet} />
        </header>
        <p>misc sheet info</p>
      </article>
    </Link>
  )
}

export default MonthlySheetCard 