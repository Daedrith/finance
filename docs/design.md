
- GL Journal system
  - double entry, split transactions
  - multiple currency support, just for completeness?
  - terminology: I hate debit/credit; adopt GNU Cash's terminology (depending on account type)
- Alternative: Resources, events, agents (REA) system?
  - Not sure it offers enough benefit; maybe for businesses
  - Then again, not that much different than double-entry system; each object is just an account, but we can have behaviors; perhaps it makes it easier to compose behaviors?
    - objects can have hierarchies
- Well, I think the simplest data model will work best for me:
  - Account: name, credit/debit labels, tags
    - Do we decouple name from identity?
  - Transaction: balanced transfer between 2 or more accounts; 
    - List of (account, amount delta) pairs: call this a transfer?
      - Amounts should be scaled by 100 (if I don't have fractional amounts) to avoid floating point precision errors)
      - I think to be on the safe side, I should allow "negative debits/credits" (instead of inferring from the sign)
    - Create date, Post date, Verify date?
    - Status (confirmed, unconfirmed, predicted, void?)
    - Tags
    - How do I want to treat immutability (e.g. a prediction that was off, or a end-of-month balance needing reconciliation)? Add more transfers?
      - Predictions can probably just be mutated?
      - Errors should probably require corrections?
  - Sub-accounts? or Parent Account? Or, use name to establish hierarchy?
    
- Itemization?
  - 

- Automatic transactions
  - interest payments
  - recurring bills, perhaps leave amount unresolved?
  
- Import system
  - CSV
  - maybe look into financial APIs later
  
- Reconciliation
  - match manual entries with charge alerts and statements
  
- Reporting

- UI:
  - web, mobile web, offline app
    - distributed

- Security:
  - encryption... auth?
  - entry w/o decryption