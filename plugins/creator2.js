let handler = function (m) {
  // this.sendContact(m.chat, '6285774869896', 'πππ³π±πΎππ', m)
  conn.sendContact(m.chat, '6285774869896', 'ππππ’π₯ππ', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(kontak)$/i

module.exports = handler
