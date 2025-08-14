// Layouts/BaseLayout.js
import Header from '~/components/Components/Header';

function BaseLayout({ children, renderMainContent, bellButtonRef, onToggleNotificationTablet }) {
  return (
    <div>
      <Header onToggleNotificationTablet={onToggleNotificationTablet} bellButtonRef={bellButtonRef} />

      {renderMainContent?.() || (
        <div className="container-fluid">
          <div className="content">{children}</div>
        </div>
      )}
    </div>
  );
}

export default BaseLayout;
