type Props = {
  paused: boolean
  onToggle: () => void
}

export function MotionControl({ paused, onToggle }: Props) {
  return (
    <div className="control control--motion">
      <button
        type="button"
        className="control__button"
        onClick={onToggle}
        aria-pressed={paused}
        aria-label={paused ? 'Resume decorative motion' : 'Pause decorative motion'}
        title={paused ? 'Resume decorative motion' : 'Pause decorative motion'}
      >
        <span className="control__icon" aria-hidden="true">
          {paused ? (
            <svg viewBox="0 0 28 28" fill="none" focusable="false">
              <path d="M11 8.5v11l9-5.5-9-5.5Z" stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 28 28" fill="none" focusable="false">
              <path d="M10.5 8.5v11M17.5 8.5v11" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
            </svg>
          )}
        </span>
        <span className="control__text">{paused ? 'Motion paused' : 'Motion'}</span>
      </button>
    </div>
  )
}
