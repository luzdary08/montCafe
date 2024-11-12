import '../styles/subtitle.css'
export default function Subtitle({children, className = '', position = 'left'}) {
  return (
    <h2 className={`subtitle ${className} ${position}`}>{children}</h2>
  )
}
