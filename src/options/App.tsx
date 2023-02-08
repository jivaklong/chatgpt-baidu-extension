import { CssBaseline, GeistProvider, Radio, Select, Text, Toggle, useToasts } from '@geist-ui/core'
import { capitalize } from 'lodash-es'
import { useCallback, useEffect, useMemo, useState } from 'preact/hooks'
import '../base.css'
import {
  getUserConfig,
  Language,
  Theme,
  TriggerMode,
  TRIGGER_MODE_TEXT,
  updateUserConfig,
} from '../config'
import logo from '../logo.png'
import { detectSystemColorScheme, getExtensionVersion } from '../utils'
import ProviderSelect from './ProviderSelect'

function OptionsPage(props: { theme: Theme; onThemeChange: (theme: Theme) => void }) {
  const [triggerMode, setTriggerMode] = useState<TriggerMode>(TriggerMode.Always)
  const [language, setLanguage] = useState<Language>(Language.Auto)
  const { setToast } = useToasts()

  useEffect(() => {
    getUserConfig().then((config) => {
      setTriggerMode(config.triggerMode)
      setLanguage(config.language)
    })
  }, [])

  const onTriggerModeChange = useCallback(
    (mode: TriggerMode) => {
      setTriggerMode(mode)
      updateUserConfig({ triggerMode: mode })
      setToast({ text: '已保存更改', type: 'success' })
    },
    [setToast],
  )

  const onThemeChange = useCallback(
    (theme: Theme) => {
      updateUserConfig({ theme })
      props.onThemeChange(theme)
      setToast({ text: '已保存更改', type: 'success' })
    },
    [props, setToast],
  )

  const onLanguageChange = useCallback(
    (language: Language) => {
      updateUserConfig({ language })
      setToast({ text: '已保存更改', type: 'success' })
    },
    [setToast],
  )

  return (
    <div className="container mx-auto">
      <nav className="flex flex-row justify-between items-center mt-5 px-2">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} className="w-10 h-10 rounded-lg" />
          <span className="font-semibold">ChatGPT for Baidu (v{getExtensionVersion()})</span>
        </div>
        <div className="flex flex-row gap-3">
          <a href="https://www.evdian.com" target="_blank" rel="noreferrer">
            evdian
          </a>
          <a
            href="https://github.com/jivaklong/chatgpt-baidu-extension"
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </div>
      </nav>
      <main className="w-[500px] mx-auto mt-14">
        <Text h2>参数设置</Text>
        <Text h3 className="mt-5">
          触发模式
        </Text>
        <Radio.Group
          value={triggerMode}
          onChange={(val) => onTriggerModeChange(val as TriggerMode)}
        >
          {Object.entries(TRIGGER_MODE_TEXT).map(([value, texts]) => {
            return (
              <Radio key={value} value={value}>
                {texts.title}
                <Radio.Description>{texts.desc}</Radio.Description>
              </Radio>
            )
          })}
        </Radio.Group>
        <Text h3 className="mt-5">
          皮肤
        </Text>
        <Radio.Group value={props.theme} onChange={(val) => onThemeChange(val as Theme)} useRow>
          {Object.entries(Theme).map(([k, v]) => {
            return (
              <Radio key={v} value={v}>
                {k}
              </Radio>
            )
          })}
        </Radio.Group>
        <Text h3 className="mt-5 mb-0">
          语言
        </Text>
        <Text className="my-1">
          ChatGPT响应中使用的语言 <span className="italic">自动</span>
        </Text>
        <Select
          value={language}
          placeholder="Choose one"
          onChange={(val) => onLanguageChange(val as Language)}
        >
          {Object.entries(Language).map(([k, v]) => (
            <Select.Option key={k} value={v}>
              {capitalize(v)}
            </Select.Option>
          ))}
        </Select>
        <Text h3 className="mt-5 mb-0">
          AI提供商
        </Text>
        <ProviderSelect />
        <Text h3 className="mt-8">
          其它设置
        </Text>
        <div className="flex flex-row items-center gap-4">
          <Toggle initialChecked disabled />
          <Text b margin={0}>
            自动删除搜索生成的对话
          </Text>
        </div>
      </main>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(Theme.Auto)

  const themeType = useMemo(() => {
    if (theme === Theme.Auto) {
      return detectSystemColorScheme()
    }
    return theme
  }, [theme])

  useEffect(() => {
    getUserConfig().then((config) => setTheme(config.theme))
  }, [])

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <OptionsPage theme={theme} onThemeChange={setTheme} />
    </GeistProvider>
  )
}

export default App
