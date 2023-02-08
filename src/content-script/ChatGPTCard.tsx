import { LightBulbIcon, SearchIcon } from '@primer/octicons-react'
import { useState } from 'preact/hooks'
import { TriggerMode } from '../config'
import ChatGPTQuery, { QueryStatus } from './ChatGPTQuery'
import { endsWithQuestionMark } from './utils.js'

interface Props {
  question: string
  triggerMode: TriggerMode
  onStatusChange?: (status: QueryStatus) => void
}

function ChatGPTCard(props: Props) {
  const [triggered, setTriggered] = useState(false)

  if (props.triggerMode === TriggerMode.Always) {
    return <ChatGPTQuery question={props.question} onStatusChange={props.onStatusChange} />
  }
  if (props.triggerMode === TriggerMode.QuestionMark) {
    if (endsWithQuestionMark(props.question.trim())) {
      return <ChatGPTQuery question={props.question} onStatusChange={props.onStatusChange} />
    }
    return (
      <p className="icon-and-text">
        <LightBulbIcon size="small" /> 通过在查询后附加问号来触发ChatGPT
      </p>
    )
  }
  if (triggered) {
    return <ChatGPTQuery question={props.question} onStatusChange={props.onStatusChange} />
  }
  return (
    <p className="icon-and-text cursor-pointer" onClick={() => setTriggered(true)}>
      <SearchIcon size="small" /> 向ChatGPT询问此查询
    </p>
  )
}

export default ChatGPTCard
