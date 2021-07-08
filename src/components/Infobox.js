import React from 'react'
import { Card, CardContent, Typography } from "@material-ui/core"
import '../css/InfoBox.css'

function Infobox({title, cases, total}) {
  return (
    <Card>
      <CardContent className="infoBox">
        <Typography className="infoBox-title" color="textSecondary">{title}</Typography>

        <h2 className="infoBox-cases">{cases}</h2>

        <Typography className="infoBox-total" color="textSecondary">{total} Total</Typography>
        
      </CardContent>
      
    </Card>
  )
}

export default Infobox
