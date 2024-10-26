// components 
import MonthlySheetCard from '../../components/MonthlySheetCard/MonthlySheetCard.jsx';

// css 
import styles from './MonthlySheetList.module.css'

const MonthlySheetList = (props) => {
  return (
    <main className={styles.container}>
      {props.monthlySheets.length > 0 ? (
        props.monthlySheets.map(monthlySheet => (
          <MonthlySheetCard key={monthlySheet._id} monthlySheet={monthlySheet} />
        ))
      ) : (
        <p>No monthly sheets available</p>
      )}
      Monthly Sheets 
    </main>
  );
};


export default MonthlySheetList


