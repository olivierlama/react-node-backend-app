import xmlrpc.client
url = "http://52.210.77.87:8069"

db = "db-odoo" #database name here

# username = 'openpg'

# password = "openpgpwd"

username = 'admin@admin.com'

password = "3cb0f37dfb972c21473a1649758c3b7dbda63c18"
common = xmlrpc.client.ServerProxy('{}/xmlrpc/2/common'.format(url))

ver= common.version()   

print(ver)
uid = common.authenticate(db, username, password, {})

print(uid) # Check access expected to print 2

models = xmlrpc.client.ServerProxy('{}/xmlrpc/2/object'.format(url))
res= models.execute_kw(db, uid, password, 'res.partner', 'check_access_rights', ['read'], {'raise_exception': False})
print(res)
res=models.execute_kw(db, uid, password, 'res.partner', 'search', [[['is_company', '=', True]]])
res=models.execute_kw(db, uid, password, 'res.partner', 'fields_get', [], {'attributes': ['string', 'help', 'type']})
print(res)