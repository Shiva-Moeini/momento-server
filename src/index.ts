import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/timelines', (c) => {
  return c.json({})
})

app.post('/timelines', (c) => {
  return c.json({})
})

app.put('/timelines', (c) => {
  return c.json({})
})

app.delete('/timelines', (c) => {
  return c.json({})
})

app.get('/timelines/:id', (c) => {
  return c.json({})
})

app.get('/timelines/:id/timeline-items', (c) => {
  return c.json({})
})

app.post('/timelines/:id/timeline-items', (c) => {
  return c.json({})
})

app.put('/timelines/:id/timeline-items', (c) => {
  return c.json({})
})

app.delete('/timelines/:id/timeline-items', (c) => {
  return c.json({})
})

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
