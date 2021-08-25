import { QuestionType } from './core/models/test.model';

export const ROOT_PATH  = '/';
export const LOGIN_PATH = 'login';
export const LOGIN_MODULE = './pages/login/login.module';
export const SELECT_LEVEL_PATH = 'select-level';
export const SELECT_LEVEL_MODULE = './modules/level-select/level-select.module';
export const GRAMMAR_PATH = 'grammar';
export const GRAMMAR_MODULE = './modules/grammar/grammar.module';
export const WRITING_PATH = 'writing';
export const WRITING_MODULE = './modules/writing/writing.module';
export const LISTENING_PATH = 'listening';
export const LISTENING_MODULE = './modules/listening/listening.module';
export const SPEAKING_PATH = 'speaking';
export const SPEAKING_MODULE = './modules/speaking/speaking.module';
export const ACCOUNT_PATH = 'account'
export const RESULT_MODULE = './modules/result/result.module';
export const ERROR_PATH = 'error';
export const ACCOUNT_MODULE = './account/account.module.ts'
export const QUESTION_GRAMMAR_PATH = QuestionType.Grammar;
export const QUESTION_LISTENING_PATH = QuestionType.Listening;
export const PROFILE_PATH = 'profile';

export const appRoutingLoadChildren = {
  profileModule: () =>
    import('./modules/profile/profile.module').then((m) => m.ProfileModule),
  loginModule: () => 
    import(LOGIN_MODULE).then((m) => m.LoginModule),
  selectLevelModule: () =>
    import(SELECT_LEVEL_MODULE).then((m) => m.LevelSelectModule),
  grammarModule: () => 
    import(GRAMMAR_MODULE).then((m) => m.GrammarModule),
  listeningModule: () => 
    import(LISTENING_MODULE).then((m) => m.ListeningModule),
  speakingModule: () => 
    import(SPEAKING_MODULE).then((m) => m.SpeakingModule),
  accountModule: () => 
    import(ACCOUNT_MODULE).then((m) => m.AccountModule)
};
