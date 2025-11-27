/**
 * ArchiveWindow Component
 * Displays a trash/archive window with ability to manage archived files
 * Behaves like a standard window with minimize/maximize/close functionality
 */

import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const ArchiveWindowContent = () => {
  const { windows } = useWindowStore();
  const [archivedItems, setArchivedItems] = useState([
    {
      id: 1,
      name: "Old Project.zip",
      type: "Archive",
      dateArchived: "Nov 20, 2025",
      size: "245 MB",
    },
    {
      id: 2,
      name: "Unused Component.jsx",
      type: "File",
      dateArchived: "Nov 18, 2025",
      size: "12 KB",
    },
    {
      id: 3,
      name: "Backup Database",
      type: "Folder",
      dateArchived: "Nov 15, 2025",
      size: "1.2 GB",
    },
  ]);

  const listRef = useRef(null);
  const [selectedId, setSelectedId] = useState(null);

  // Animation for list items on mount
  useGSAP(() => {
    if (!listRef.current) return;

    const items = listRef.current.querySelectorAll(".archive-item");

    gsap.fromTo(
      items,
      { opacity: 0, x: -10 },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.out",
      }
    );
  }, [archivedItems]);

  /**
   * Handle delete archived item
   */
  const handleDelete = (id) => {
    gsap.to(`#archive-item-${id}`, {
      opacity: 0,
      x: -20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setArchivedItems(archivedItems.filter((item) => item.id !== id));
      },
    });
  };

  /**
   * Handle restore item (remove from archive)
   */
  const handleRestore = (id) => {
    gsap.to(`#archive-item-${id}`, {
      opacity: 0,
      x: 20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setArchivedItems(archivedItems.filter((item) => item.id !== id));
      },
    });
  };

  /**
   * Handle empty archive
   */
  const handleEmptyArchive = () => {
    if (archivedItems.length === 0) return;

    gsap.to(".archive-item", {
      opacity: 0,
      scale: 0.8,
      y: -10,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
      onComplete: () => {
        setArchivedItems([]);
      },
    });
  };

  return (
    <div className="archive-window-content">
      {/* Header */}
      <div id="window-header">
        <WindowControls target="archive" />
        <h2>Archive</h2>
      </div>

      {/* Content */}
      <div className="archive-window-body">
        {/* Stats Bar */}
        <div className="archive-stats">
          <div className="stat">
            <span className="label">Items:</span>
            <span className="value">{archivedItems.length}</span>
          </div>
          {archivedItems.length > 0 && (
            <button
              className="btn btn-danger btn-sm"
              onClick={handleEmptyArchive}
              title="Empty all archived items"
            >
              Empty Archive
            </button>
          )}
        </div>

        {/* Items List */}
        {archivedItems.length > 0 ? (
          <div className="archive-list" ref={listRef}>
            {archivedItems.map((item) => (
              <div
                key={item.id}
                id={`archive-item-${item.id}`}
                className={`archive-item ${selectedId === item.id ? "selected" : ""}`}
                onClick={() => setSelectedId(item.id)}
              >
                {/* Item Icon */}
                <div className="archive-item-icon">
                  {item.type === "Archive" && <span className="icon">📦</span>}
                  {item.type === "File" && <span className="icon">📄</span>}
                  {item.type === "Folder" && <span className="icon">📁</span>}
                </div>

                {/* Item Info */}
                <div className="archive-item-info">
                  <h4 className="archive-item-name">{item.name}</h4>
                  <div className="archive-item-meta">
                    <span className="type">{item.type}</span>
                    <span className="size">{item.size}</span>
                    <span className="date">{item.dateArchived}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="archive-item-actions">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRestore(item.id);
                    }}
                    title="Restore to original location"
                  >
                    Restore
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(item.id);
                    }}
                    title="Permanently delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="archive-empty">
            <div className="empty-icon">🗑️</div>
            <p>Archive is empty</p>
            <small>Archived items will appear here</small>
          </div>
        )}
      </div>
    </div>
  );
};

/**
 * Wrap the content with WindowWrapper to get
 * all window functionality (minimize, maximize, dragging, etc.)
 */
const ArchiveWindow = WindowWrapper(ArchiveWindowContent, "archive");

export default ArchiveWindow;
