let os = require('os');
let router = require('express').Router();
let pm2 = require('pm2');
let config = require('../lib/config');
let _ = require('underscore');

module.exports = () => {

	router.get('/', (req, res) => {
		res.render('server/about');
	});

	router.get('/data', (req, res) => {
		pm2.describe(config.appName, (err, description) => {
			if (err)
				return res.status(500).send(err);

			let cpus = os.cpus();
			let pm_env = description[0].pm2_env;
			let items = [
				{ key: 'cpu', value: cpus[0].model },
				{ key: 'cores', value: cpus.length },
				{ key: 'cluster nodes', value: pm_env.instances },
				{ key: 'cwd', value: pm_env.pm_cwd },
				{ key: 'exec', value: pm_env.pm_exec_path },
				{ key: 'NodeJS version', value: pm_env.node_version },
				{ key: 'PM2 version', value: pm_env.axm_options.module_version }
			];
			let nodes = _.map(description, (desc) => {
				return {
					id: desc.pm_id,
					status: desc.pm2_env.status,
					memory: `${(desc.monit.memory / 1024 / 1024).toFixed(2)} MB`,
					cpu: `${desc.monit.cpu}%`,
					uptime: desc.pm2_env.pm_uptime,
					unstableRestarts: desc.pm2_env.unstable_restarts
				};
			});
			res.send({ items: items, nodes: nodes });
		});
	});

	return router;
};

// let json = {
// 	"pid":46120,
// 	"name":"dkmerger",
// 	"pm2_env":{
// 	"exec_mode":"cluster_mode",
// 		"env":{
// 		"dkmerger":"{}",
// 			"PM2_HOME":"C:\\Users\\connor\\.pm2",
// 			"windir":"C:\\Windows",
// 			"VSSDK140Install":"C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\VSSDK\\",
// 			"VS140COMNTOOLS":"C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\Tools\\",
// 			"USERPROFILE":"C:\\Users\\connor",
// 			"USERNAME":"connor",
// 			"USERDOMAIN_ROAMINGPROFILE":"CJTKENNEDY",
// 			"USERDOMAIN":"CJTKENNEDY",
// 			"USERDNSDOMAIN":"CJTKENNEDY.COM",
// 			"TMP":"C:\\Users\\connor\\AppData\\Local\\Temp\\",
// 			"TERM":"msys",
// 			"TEMP":"C:\\Users\\connor\\AppData\\Local\\Temp\\",
// 			"SystemRoot":"C:\\Windows",
// 			"SystemDrive":"C:",
// 			"SSH_AUTH_SOCK":"/tmp/ssh-EdjxtmGmt4yR/agent.16372",
// 			"SSH_AGENT_PID":"6860",
// 			"SESSIONNAME":"Console",
// 			"REDISCLOUD_URL":"***REMOVED***",
// 			"PUBLIC":"C:\\Users\\Public",
// 			"PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Users\\connor\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files (x86)\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",
// 			"PSExecutionPolicyPreference":"Unrestricted",
// 			"ProgramW6432":"C:\\Program Files",
// 			"ProgramFiles(x86)":"C:\\Program Files (x86)",
// 			"ProgramFiles":"C:\\Program Files",
// 			"ProgramData":"C:\\ProgramData",
// 			"PROCESSOR_REVISION":"0200",
// 			"PROCESSOR_LEVEL":"21",
// 			"PROCESSOR_IDENTIFIER":"AMD64 Family 21 Model 2 Stepping 0, AuthenticAMD",
// 			"PROCESSOR_ARCHITECTURE":"AMD64",
// 			"posh_git":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PoshGit_a2be688889e1b24632e83adccd9b2a44b91d655b\\profile.example.ps1",
// 			"PM2_PROGRAMMATIC":"true",
// 			"PM2_JSON_PROCESSING":"true",
// 			"PM2_INTERACTOR_PROCESSING":"true",
// 			"PLINK_PROTOCOL":"ssh",
// 			"PGSSLMODE":"require",
// 			"PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL",
// 			"Path":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11\\cmd;C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11\\usr\\bin;C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11\\usr\\share\\git-tfs;C:\\Users\\connor\\AppData\\Local\\Apps\\2.0\\X9Q91ADO.37Z\\Z0KKYXX8.73L\\gith..tion_317444273a93ac29_0003.0003_665ccbdbd3c2d8d4;C:\\Users\\connor\\AppData\\Local\\GitHub\\lfs-amd64_1.3.1;C:\\Python27\\;C:\\Python27\\Scripts;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Windows\\system32\\config\\systemprofile\\.dnx\\bin;C:\\Program Files\\Microsoft DNX\\Dnvm\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files (x86)\\Windows Kits\\8.1\\Windows Performance Toolkit\\;C:\\Users\\connor\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\connor\\AppData\\Roaming\\npm;C:\\Program Files\\rclone;C:\\Program Files\\Heroku\\bin;C:\\Program Files\\ffmpeg\\bin;C:\\Program Files\\hashcat;C:\\Program Files\\lame;C:\\Program Files (x86)\\MSBuild\\14.0\\bin\\;C:\\Program Files (x86)\\Microsoft SDKs\\Windows\\v8.1A\\bin\\NETFX 4.5.1 Tools\\x64",
// 			"OS":"Windows_NT",
// 			"OPBEAT_SECRET_TOKEN":"***REMOVED***",
// 			"OPBEAT_ORG_ID":"***REMOVED***",
// 			"OPBEAT_APP_ID":"***REMOVED***",
// 			"OneDrive":"C:\\Users\\connor\\OneDrive",
// 			"NUMBER_OF_PROCESSORS":"8",
// 			"NODE_ENV":"development",
// 			"MOZ_PLUGIN_PATH":"C:\\Program Files (x86)\\Foxit Software\\Foxit Reader\\plugins\\",
// 			"MAILGUN_DOMAIN":"***REMOVED***",
// 			"MAILGUN_API_KEY":"***REMOVED***",
// 			"LOGONSERVER":"\\\\ADC",
// 			"LOCALAPPDATA":"C:\\Users\\connor\\AppData\\Local",
// 			"HUBOT_SLACK_TOKEN":"xoxb-34601838128-V0tisyj6rFxtbbeLvbuoq0PZ",
// 			"HUBOT_GOOGLE_SAFE_SEARCH":"off",
// 			"HUBOT_GOOGLE_CSE_KEY":"\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPBfbXV3+dvtb9\\nqxMjisvjTp8HTBWoD3cGDyfdd/LTuMY0O76BAZKxczYk0tO23RYtxjT2hACFIwec\\nH2Dg8oucPOMRYqK9kZ+bZAw0M2OqGMC9X2jjHFSfOMvGAeFoFQKJJFx1WswDkQkC\\n1dZW9eP0iqda9i6bPUz8ZtnxBtbnJL8IryZ+yZUOXqFoZ1CDNZYLdyDU5IixwFAe\\nUdIWGTKx/dAp044faU+/8h/K66WSOllxrH0KOSK88NvQi0+VL8OR5bTNXbFegZaC\\nliCXOjXnh3TKmxlHQmxejpL/ORVYz3vus67JLAuZxn9m4jAYl8egIIxZxFF1yR1u\\naNdEfuB7AgMBAAECggEAPghfNK1Nu5SPWPy/U1Ya8p8iGJ8mcXsrq6QdLVCeMLhe\\ntz8GdJvDDVYkMLqEezbPLNFgHV/JffVgkpWFhmuMpBpAfkTiwwgLSvGM3YNAggE0\\nb66XJpIeHeUbdOlR47vhGqx7sabM/+sDFoi664LA+Uq+JZTLSCfBYWQWuRS3Vw8N\\nHNTmuGVMFLDgFO4WR2CGxKSt2FQe/1TiMgZf8sLw4ueuuH7yKrQPKCtMY83JUN0T\\n+H2QGxyFuYJwXQgMeilGy8UbuAq+rrTdVVjMf7nf21z9ARydoPfluzw3yB7EVRsh\\nZHtBSmyqKfXx2dKm4hkngAm6EsUGBJ13EmfTHNvUUQKBgQD0OCoUTISjkuSfbPHK\\nlFBdysByAcQ83WMnewedjgyfkx65D0n3kUNu0zyWX9zMTL5dxak5/Gvbk//KnCcK\\np3rLfmrZkbW0JLQh/SzJApP9rbIH9/PvXSEoRmAzrO7v/ZSqZ9hEeX+8cXMmolkl\\npVaKtT6dPZd8SMfA4mmmpFV+wwKBgQCV7CQ9rOfusxS8TaputgzfXpeNoMFJjlCp\\nlr05GvexTTZF8W1m4TyaNxrZ3DpPtJ3iPg+PGIgTfcc3fE+mSs5G1/Dp5xfduimR\\n3H2nAp6/jy1rwl1AplzmAYWo7PvC4lqdXdrwpBRFXwcqVYVZ13voXbDk/d5YkeNP\\nj6d+CVFr6QKBgGln7FGCjSUEe4SLwvhKdz1kCxepx4b1jpw1r53C95PQLcx12tjt\\na4tjxJyql2PeI7PZYibS2cKV6CsMppUkoA1AbOGm0CQGS3D4EuJXKISu+U4TKMfB\\nDFSTu2XSV/ZhHk9GLsOvJQCyfp7IJ23mJKoNfA7lzIIp731Cu5LfDr99AoGBAJPD\\nT6DeFyZDqM9DORSvJ5bMM1EqvPbTZpsPb+altrUwZaqgHnTE0Ccq4rMRBQPj/6yq\\nAEnIIu4bDMuaISLEHfTjBpZy5ynpPul9SPbfdTlWU60evyxmC6/Clkr9b9IPqMHr\\nbEu7XCNXWseVzL3UzVIjbaL0uD3RZBnZe3qUkoRpAoGATM4/Mwd0ni9mSBLyafyl\\nywxbONJbfzvLtwUc63UjOobnKkBf478QzwhhJdXxULzVqVpJ9pKXvG0FIEtV5jeA\\n3UZ0SlFTj+bGMoPUM3Ua2dHtLDUK4g5y9Urq0Fjv+GjVwgP5fOOXDbsbKmznV8fA\\nBDdBJPvgjJL70g2Tqe319nI",
// 			"HUBOT_GOOGLE_CSE_ID":"1c42279b7c998deda9baa5dafcc3b44745fd3bab",
// 			"HUBOT_AUTH_ADMIN":"U10HENG04,U103DSQD8",
// 			"HOMEPATH":"\\Users\\connor",
// 			"HOMEDRIVE":"C:",
// 			"HOME":"C:\\Users\\connor",
// 			"HEROKU_STAGING_APP_ID":"b3ee89e6-0a19-410f-976f-7d1170b7be69",
// 			"HEROKU_PRODUCTION_APP_ID":"98db9ae6-6a2c-4476-b425-83b5819262bc",
// 			"HEROKU_PIPELINE_ID":"6d79b386-e63e-42a7-9b15-5ab6ca123435",
// 			"git_install_root":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11",
// 			"github_shell":"true",
// 			"github_posh_git":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PoshGit_a2be688889e1b24632e83adccd9b2a44b91d655b",
// 			"github_git":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11",
// 			"FPS_BROWSER_USER_PROFILE_STRING":"Default",
// 			"FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer",
// 			"EDITOR":"GitPad",
// 			"DATABASE_URL":"***REMOVED***",
// 			"CONFIG":"local",
// 			"ComSpec":"C:\\Windows\\system32\\cmd.exe",
// 			"COMPUTERNAME":"CONNORPC",
// 			"CommonProgramW6432":"C:\\Program Files\\Common Files",
// 			"CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",
// 			"CommonProgramFiles":"C:\\Program Files\\Common Files",
// 			"asl.log":"Destination=file",
// 			"APPDATA":"C:\\Users\\connor\\AppData\\Roaming",
// 			"ALLUSERSPROFILE":"C:\\ProgramData"
// 	},
// 	"treekill":true,
// 		"autorestart":true,
// 		"automation":true,
// 		"pmx":true,
// 		"vizion":true,
// 		"merge_logs":true,
// 		"instances":2,
// 		"max_memory_restart":536870912,
// 		"name":"dkmerger",
// 		"node_args":[
//
// 	],
// 		"pm_exec_path":"C:\\Users\\connor\\Documents\\GitHub\\wedding\\app.js",
// 		"pm_cwd":"C:\\Users\\connor\\Documents\\GitHub\\wedding",
// 		"exec_interpreter":"node",
// 		"pm_out_log_path":"C:\\Users\\connor\\.pm2\\logs\\dkmerger-out.log",
// 		"pm_err_log_path":"C:\\Users\\connor\\.pm2\\logs\\dkmerger-error.log",
// 		"pm_pid_path":"C:\\Users\\connor\\.pm2\\pids\\dkmerger-0.pid",
// 		"km_link":false,
// 		"NODE_APP_INSTANCE":0,
// 		"vizion_running":false,
// 		"dkmerger":"{}",
// 		"PM2_HOME":"C:\\Users\\connor\\.pm2",
// 		"windir":"C:\\Windows",
// 		"VSSDK140Install":"C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\VSSDK\\",
// 		"VS140COMNTOOLS":"C:\\Program Files (x86)\\Microsoft Visual Studio 14.0\\Common7\\Tools\\",
// 		"USERPROFILE":"C:\\Users\\connor",
// 		"USERNAME":"connor",
// 		"USERDOMAIN_ROAMINGPROFILE":"CJTKENNEDY",
// 		"USERDOMAIN":"CJTKENNEDY",
// 		"USERDNSDOMAIN":"CJTKENNEDY.COM",
// 		"TMP":"C:\\Users\\connor\\AppData\\Local\\Temp\\",
// 		"TERM":"msys",
// 		"TEMP":"C:\\Users\\connor\\AppData\\Local\\Temp\\",
// 		"SystemRoot":"C:\\Windows",
// 		"SystemDrive":"C:",
// 		"SSH_AUTH_SOCK":"/tmp/ssh-EdjxtmGmt4yR/agent.16372",
// 		"SSH_AGENT_PID":"6860",
// 		"SESSIONNAME":"Console",
// 		"REDISCLOUD_URL":"***REMOVED***",
// 		"PUBLIC":"C:\\Users\\Public",
// 		"PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Users\\connor\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files (x86)\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",
// 		"PSExecutionPolicyPreference":"Unrestricted",
// 		"ProgramW6432":"C:\\Program Files",
// 		"ProgramFiles(x86)":"C:\\Program Files (x86)",
// 		"ProgramFiles":"C:\\Program Files",
// 		"ProgramData":"C:\\ProgramData",
// 		"PROCESSOR_REVISION":"0200",
// 		"PROCESSOR_LEVEL":"21",
// 		"PROCESSOR_IDENTIFIER":"AMD64 Family 21 Model 2 Stepping 0, AuthenticAMD",
// 		"PROCESSOR_ARCHITECTURE":"AMD64",
// 		"posh_git":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PoshGit_a2be688889e1b24632e83adccd9b2a44b91d655b\\profile.example.ps1",
// 		"PM2_PROGRAMMATIC":"true",
// 		"PM2_JSON_PROCESSING":"true",
// 		"PM2_INTERACTOR_PROCESSING":"true",
// 		"PLINK_PROTOCOL":"ssh",
// 		"PGSSLMODE":"require",
// 		"PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL",
// 		"Path":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11\\cmd;C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11\\usr\\bin;C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11\\usr\\share\\git-tfs;C:\\Users\\connor\\AppData\\Local\\Apps\\2.0\\X9Q91ADO.37Z\\Z0KKYXX8.73L\\gith..tion_317444273a93ac29_0003.0003_665ccbdbd3c2d8d4;C:\\Users\\connor\\AppData\\Local\\GitHub\\lfs-amd64_1.3.1;C:\\Python27\\;C:\\Python27\\Scripts;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Program Files\\nodejs\\;C:\\Program Files\\Git\\cmd;C:\\Windows\\system32\\config\\systemprofile\\.dnx\\bin;C:\\Program Files\\Microsoft DNX\\Dnvm\\;C:\\Program Files\\Microsoft SQL Server\\130\\Tools\\Binn\\;C:\\Program Files (x86)\\Windows Kits\\8.1\\Windows Performance Toolkit\\;C:\\Users\\connor\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\connor\\AppData\\Roaming\\npm;C:\\Program Files\\rclone;C:\\Program Files\\Heroku\\bin;C:\\Program Files\\ffmpeg\\bin;C:\\Program Files\\hashcat;C:\\Program Files\\lame;C:\\Program Files (x86)\\MSBuild\\14.0\\bin\\;C:\\Program Files (x86)\\Microsoft SDKs\\Windows\\v8.1A\\bin\\NETFX 4.5.1 Tools\\x64",
// 		"OS":"Windows_NT",
// 		"OPBEAT_SECRET_TOKEN":"***REMOVED***",
// 		"OPBEAT_ORG_ID":"***REMOVED***",
// 		"OPBEAT_APP_ID":"***REMOVED***",
// 		"OneDrive":"C:\\Users\\connor\\OneDrive",
// 		"NUMBER_OF_PROCESSORS":"8",
// 		"NODE_ENV":"development",
// 		"MOZ_PLUGIN_PATH":"C:\\Program Files (x86)\\Foxit Software\\Foxit Reader\\plugins\\",
// 		"MAILGUN_DOMAIN":"***REMOVED***",
// 		"MAILGUN_API_KEY":"***REMOVED***",
// 		"LOGONSERVER":"\\\\ADC",
// 		"LOCALAPPDATA":"C:\\Users\\connor\\AppData\\Local",
// 		"HUBOT_SLACK_TOKEN":"xoxb-34601838128-V0tisyj6rFxtbbeLvbuoq0PZ",
// 		"HUBOT_GOOGLE_SAFE_SEARCH":"off",
// 		"HUBOT_GOOGLE_CSE_KEY":"\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPBfbXV3+dvtb9\\nqxMjisvjTp8HTBWoD3cGDyfdd/LTuMY0O76BAZKxczYk0tO23RYtxjT2hACFIwec\\nH2Dg8oucPOMRYqK9kZ+bZAw0M2OqGMC9X2jjHFSfOMvGAeFoFQKJJFx1WswDkQkC\\n1dZW9eP0iqda9i6bPUz8ZtnxBtbnJL8IryZ+yZUOXqFoZ1CDNZYLdyDU5IixwFAe\\nUdIWGTKx/dAp044faU+/8h/K66WSOllxrH0KOSK88NvQi0+VL8OR5bTNXbFegZaC\\nliCXOjXnh3TKmxlHQmxejpL/ORVYz3vus67JLAuZxn9m4jAYl8egIIxZxFF1yR1u\\naNdEfuB7AgMBAAECggEAPghfNK1Nu5SPWPy/U1Ya8p8iGJ8mcXsrq6QdLVCeMLhe\\ntz8GdJvDDVYkMLqEezbPLNFgHV/JffVgkpWFhmuMpBpAfkTiwwgLSvGM3YNAggE0\\nb66XJpIeHeUbdOlR47vhGqx7sabM/+sDFoi664LA+Uq+JZTLSCfBYWQWuRS3Vw8N\\nHNTmuGVMFLDgFO4WR2CGxKSt2FQe/1TiMgZf8sLw4ueuuH7yKrQPKCtMY83JUN0T\\n+H2QGxyFuYJwXQgMeilGy8UbuAq+rrTdVVjMf7nf21z9ARydoPfluzw3yB7EVRsh\\nZHtBSmyqKfXx2dKm4hkngAm6EsUGBJ13EmfTHNvUUQKBgQD0OCoUTISjkuSfbPHK\\nlFBdysByAcQ83WMnewedjgyfkx65D0n3kUNu0zyWX9zMTL5dxak5/Gvbk//KnCcK\\np3rLfmrZkbW0JLQh/SzJApP9rbIH9/PvXSEoRmAzrO7v/ZSqZ9hEeX+8cXMmolkl\\npVaKtT6dPZd8SMfA4mmmpFV+wwKBgQCV7CQ9rOfusxS8TaputgzfXpeNoMFJjlCp\\nlr05GvexTTZF8W1m4TyaNxrZ3DpPtJ3iPg+PGIgTfcc3fE+mSs5G1/Dp5xfduimR\\n3H2nAp6/jy1rwl1AplzmAYWo7PvC4lqdXdrwpBRFXwcqVYVZ13voXbDk/d5YkeNP\\nj6d+CVFr6QKBgGln7FGCjSUEe4SLwvhKdz1kCxepx4b1jpw1r53C95PQLcx12tjt\\na4tjxJyql2PeI7PZYibS2cKV6CsMppUkoA1AbOGm0CQGS3D4EuJXKISu+U4TKMfB\\nDFSTu2XSV/ZhHk9GLsOvJQCyfp7IJ23mJKoNfA7lzIIp731Cu5LfDr99AoGBAJPD\\nT6DeFyZDqM9DORSvJ5bMM1EqvPbTZpsPb+altrUwZaqgHnTE0Ccq4rMRBQPj/6yq\\nAEnIIu4bDMuaISLEHfTjBpZy5ynpPul9SPbfdTlWU60evyxmC6/Clkr9b9IPqMHr\\nbEu7XCNXWseVzL3UzVIjbaL0uD3RZBnZe3qUkoRpAoGATM4/Mwd0ni9mSBLyafyl\\nywxbONJbfzvLtwUc63UjOobnKkBf478QzwhhJdXxULzVqVpJ9pKXvG0FIEtV5jeA\\n3UZ0SlFTj+bGMoPUM3Ua2dHtLDUK4g5y9Urq0Fjv+GjVwgP5fOOXDbsbKmznV8fA\\nBDdBJPvgjJL70g2Tqe319nI",
// 		"HUBOT_GOOGLE_CSE_ID":"1c42279b7c998deda9baa5dafcc3b44745fd3bab",
// 		"HUBOT_AUTH_ADMIN":"U10HENG04,U103DSQD8",
// 		"HOMEPATH":"\\Users\\connor",
// 		"HOMEDRIVE":"C:",
// 		"HOME":"C:\\Users\\connor",
// 		"HEROKU_STAGING_APP_ID":"b3ee89e6-0a19-410f-976f-7d1170b7be69",
// 		"HEROKU_PRODUCTION_APP_ID":"98db9ae6-6a2c-4476-b425-83b5819262bc",
// 		"HEROKU_PIPELINE_ID":"6d79b386-e63e-42a7-9b15-5ab6ca123435",
// 		"git_install_root":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11",
// 		"github_shell":"true",
// 		"github_posh_git":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PoshGit_a2be688889e1b24632e83adccd9b2a44b91d655b",
// 		"github_git":"C:\\Users\\connor\\AppData\\Local\\GitHub\\PortableGit_d7effa1a4a322478cd29c826b52a0c118ad3db11",
// 		"FPS_BROWSER_USER_PROFILE_STRING":"Default",
// 		"FPS_BROWSER_APP_PROFILE_STRING":"Internet Explorer",
// 		"EDITOR":"GitPad",
// 		"DATABASE_URL":"***REMOVED***",
// 		"CONFIG":"local",
// 		"ComSpec":"C:\\Windows\\system32\\cmd.exe",
// 		"COMPUTERNAME":"CONNORPC",
// 		"CommonProgramW6432":"C:\\Program Files\\Common Files",
// 		"CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files",
// 		"CommonProgramFiles":"C:\\Program Files\\Common Files",
// 		"asl.log":"Destination=file",
// 		"APPDATA":"C:\\Users\\connor\\AppData\\Roaming",
// 		"ALLUSERSPROFILE":"C:\\ProgramData",
// 		"status":"online",
// 		"pm_uptime":1488331648491,
// 		"axm_actions":[
//
// 	],
// 		"axm_monitor":{
// 		"Loop delay":{
// 			"alert":{
//
// 			},
// 			"agg_type":"avg",
// 				"value":"69.66ms"
// 		}
// 	},
// 	"axm_options":{
// 		"default_actions":true,
// 			"transactions":false,
// 			"http":false,
// 			"http_latency":200,
// 			"http_code":500,
// 			"ignore_routes":[
//
// 		],
// 			"profiling":true,
// 			"errors":true,
// 			"alert_enabled":true,
// 			"custom_probes":true,
// 			"network":false,
// 			"ports":false,
// 			"ignoreFilter":{
// 			"method":[
// 				"OPTIONS"
// 			],
// 				"url":[
//
// 			]
// 		},
// 		"excludedHooks":[
//
// 		],
// 			"module_conf":{
//
// 		},
// 		"module_name":"dkmerger",
// 			"module_version":"2.4.1",
// 			"pmx_version":"1.0.3",
// 			"error":true
// 	},
// 	"axm_dynamic":{
//
// 	},
// 	"created_at":1488331648491,
// 		"pm_id":0,
// 		"restart_time":0,
// 		"unstable_restarts":0,
// 		"_pm2_version":"2.4.1",
// 		"versioning":null,
// 		"node_version":"7.1.0"
// },
// 	"pm_id":0,
// 	"monit":{
// 	"memory":76738560,
// 		"cpu":1
// }
// };
