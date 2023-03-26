package ma.enova.easystock.service.facade.admin;

import java.util.List;
import ma.enova.easystock.bean.core.Client;
import ma.enova.easystock.dao.criteria.core.ClientCriteria;
import ma.enova.easystock.dao.criteria.history.ClientHistoryCriteria;
import ma.enova.easystock.zynerator.service.IService;

public interface ClientAdminService extends  IService<Client,ClientCriteria, ClientHistoryCriteria>  {




}
