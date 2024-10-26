// components 
import MonthlySheetCard from '../../components/MonthlySheetCard/MonthlySheetCard.jsx';

import styles from './MonthlySheetList.module.css'

const MonthlySheetList = (props) => {
  return (
    <main className={styles.container}>
      {props.monthlySheets.length > 0 ? (
        props.monthlySheets.map(monthlySheet => (
          <p key={monthlySheet._id}>
            {monthlySheet.name}
          </p>
        ))
      ) : (
        <p>No monthly sheets available</p>
      )}
      Monthly Sheets 
    </main>
  );
};


export default MonthlySheetList


