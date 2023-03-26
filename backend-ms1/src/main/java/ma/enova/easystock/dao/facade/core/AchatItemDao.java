package ma.enova.easystock.dao.facade.core;


import ma.enova.easystock.zynerator.repository.AbstractRepository;
import ma.enova.easystock.bean.core.AchatItem;
import org.springframework.stereotype.Repository;
import java.util.List;


@Repository
public interface AchatItemDao extends AbstractRepository<AchatItem,Long>  {

    List<AchatItem> findByProduitId(Long id);
    int deleteByProduitId(Long id);
    List<AchatItem> findByAchatId(Long id);
    int deleteByAchatId(Long id);

}
