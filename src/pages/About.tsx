
import { useState, useEffect } from 'react'
import  supabase  from '@/utils/supabase'
import { Iuser } from '@/types/user'
function About() {
  const [todos, setTodos] = useState<Iuser[]>([])

  useEffect(() => {
    async function getTodos() {
      const { data: todos } = await supabase.from('users').select()

      if (todos && todos.length > 0) {
        setTodos(todos)
      }
    }

    getTodos()
  }, [])

  return (
    <div>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
  )
}
export default About
