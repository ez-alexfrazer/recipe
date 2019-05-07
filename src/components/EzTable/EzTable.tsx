import React, {createElement} from 'react';
import {EzCard, EzCardFooter} from '../EzCard';
import {EzCheckbox} from '../EzCheckbox';
import EzButton from '../EzButton';
import EzLayout from '../EzLayout';
import {TableProps} from './EzTable.types';
import {
  Table,
  Th,
  Td,
  TableCardSection,
  TablePaginationNavItem,
  TablePaginationRowCountDropdown,
} from './EzTable.styles';
import useSorting from './useSorting';
import en from './en';
import {useTranslation} from '../../utils/hooks';

const SortDirection = ({direction}) => (
  <svg
    width="0.5em"
    height="0.4em"
    viewBox="0 0 1 1"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
  >
    {direction === 'asc' ? <polygon points="0.5,0 1,1 0,1" /> : <polygon points="0.5,1 0,0 1,0" />}
  </svg>
);

const Thead = ({columns, items, onSortClick, selection}) => {
  const col = columns.find(c => c.defaultSort);
  const initialSort = col && {column: col, direction: col.defaultSort};
  const {direction, onClick, isSorted} = useSorting(initialSort);
  return (
    <thead>
      <tr>
        {selection && (
          <Th>
            <EzCheckbox
              label="Select all"
              onChange={selection.onBulkSelectClick}
              checked={items.every(selection.isRowSelected)}
            />
          </Th>
        )}
        {columns.map((column, cellIndex) => {
          const {sortable, heading, numeric} = column;
          return (
            <Th
              key={cellIndex}
              numeric={numeric}
              sortable={sortable}
              sorted={isSorted(column)}
              onClick={event => onClick(event, column, onSortClick)}
            >
              <span>
                {heading} {sortable && <SortDirection direction={direction} />}
              </span>
            </Th>
          );
        })}
      </tr>
    </thead>
  );
};

const Tbody = ({columns, items, selection}) => (
  <tbody>
    {items.map((item, rowIndex) => (
      <tr key={rowIndex}>
        {selection && (
          <Td>
            <EzCheckbox
              label="Select row"
              checked={selection.isRowSelected(item)}
              onChange={event => selection.onRowSelectClick(event, {item})}
            />
          </Td>
        )}
        {columns.map(({accessor, numeric}, cellIndex) => (
          <Td key={cellIndex} numeric={numeric}>
            {typeof accessor === 'function' ? createElement(accessor, {item}) : item[accessor]}
          </Td>
        ))}
      </tr>
    ))}
  </tbody>
);

const TablePagination = ({pagination}) => {
  const {t} = useTranslation(en);
  const pages = Math.ceil(pagination.totalRows / pagination.rowsPerPage);

  return (
    <EzCardFooter>
      <EzLayout layout="split" className="split">
        <div>
          <TablePaginationNavItem>
            <EzButton
              use="tertiary"
              onClick={pagination.onPrevPageClick}
              disabled={pagination.currentPage === 1}
            >
              {'‹ '}
              {t('Previous Page')}
            </EzButton>
          </TablePaginationNavItem>
          <TablePaginationNavItem>
            {t('Page {{currentPage}} of {{pages}}', {currentPage: pagination.currentPage, pages})}
          </TablePaginationNavItem>
          <TablePaginationNavItem>
            <EzButton
              use="tertiary"
              onClick={pagination.onNextPageClick}
              disabled={pagination.currentPage === pages}
            >
              {t('Next Page')}
              {' ›'}
            </EzButton>
          </TablePaginationNavItem>
        </div>
        <div>
          <TablePaginationRowCountDropdown
            defaultValue={pagination.rowsPerPage}
            onChange={pagination.onRowsPerPageChange}
          >
            {pagination.rowsPerPageOptions.map(value => (
              <option key={value} value={value}>
                {t('{{num}} rows per page', {num: value})}
              </option>
            ))}
          </TablePaginationRowCountDropdown>
        </div>
      </EzLayout>
    </EzCardFooter>
  );
};

/**
 * Tables display information in a way that’s easy to scan,
 * so that users can look for patterns and insights.
 * They can be embedded in primary content, such as cards.
 */
const EzTable: React.FC<TableProps> = ({
  actions,
  title,
  subtitle,
  columns,
  items,
  selection,
  onSortClick,
  pagination,
}) => {
  const table = (
    <Table>
      <Thead columns={columns} items={items} onSortClick={onSortClick} selection={selection} />
      <Tbody columns={columns} items={items} selection={selection} />
    </Table>
  );

  if (!title) return table;

  return (
    <EzCard title={title} subtitle={subtitle} actions={actions}>
      <TableCardSection>{table}</TableCardSection>
      {pagination && <TablePagination pagination={pagination} />}
    </EzCard>
  );
};

export default EzTable;
