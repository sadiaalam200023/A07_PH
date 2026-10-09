import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>INVALID ROUTE</p>
      <Link href="/">হোম এ ফেরত যাই</Link>
    </div>
  )
}