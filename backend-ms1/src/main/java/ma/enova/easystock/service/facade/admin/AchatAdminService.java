package ma.enova.easystock.service.facade.admin;

import java.util.List;
import ma.enova.easystock.bean.core.Achat;
import ma.enova.easystock.dao.criteria.core.AchatCriteria;
import ma.enova.easystock.dao.criteria.history.AchatHistoryCriteria;
import ma.enova.easystock.zynerator.service.IService;

public interface AchatAdminService extends  IService<Achat,AchatCriteria, AchatHistoryCriteria>  {

    List<Achat> findByClientId(Long id);
    int deleteByClientId(Long id);



}
