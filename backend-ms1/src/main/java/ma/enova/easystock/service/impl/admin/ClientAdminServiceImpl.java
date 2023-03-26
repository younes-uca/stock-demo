package ma.enova.easystock.service.impl.admin;

import ma.enova.easystock.bean.core.Client;
import ma.enova.easystock.bean.history.ClientHistory;
import ma.enova.easystock.dao.criteria.core.ClientCriteria;
import ma.enova.easystock.dao.criteria.history.ClientHistoryCriteria;
import ma.enova.easystock.dao.facade.core.ClientDao;
import ma.enova.easystock.dao.facade.history.ClientHistoryDao;
import ma.enova.easystock.dao.specification.core.ClientSpecification;
import ma.enova.easystock.service.facade.admin.ClientAdminService;
import ma.enova.easystock.zynerator.service.AbstractServiceImpl;
import ma.enova.easystock.zynerator.util.ListUtil;
import org.springframework.stereotype.Service;
import java.util.List;






import java.util.List;
@Service
public class ClientAdminServiceImpl extends AbstractServiceImpl<Client,ClientHistory, ClientCriteria, ClientHistoryCriteria, ClientDao,
ClientHistoryDao> implements ClientAdminService {


    public Client findByReferenceEntity(Client t){
        return  dao.findByCin(t.getCin());
    }


    public void configure() {
        super.configure(Client.class,ClientHistory.class, ClientHistoryCriteria.class, ClientSpecification.class);
    }

    public ClientAdminServiceImpl(ClientDao dao, ClientHistoryDao historyDao) {
        super(dao, historyDao);
    }

}